from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from database import SessionLocal, engine, Base
from auth import create_user, verify_password, create_access_token
from models import User
from schemas import UserCreate
from routers import indices, topmovers, marketcap, get_realtime



Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Tradify API",
    description="Backend for real-time market data and stock analysis.",
    version="1.0.0"
)


origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def welcome():
    return {"message": "Welcome to Tradify API 🚀"}


@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
   
    existing_user = db.query(User).filter(
        (User.username == user.username) | (User.email == user.email)
    ).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    created_user = create_user(db, user.username, user.email, user.password)
    return {
        "id": created_user.id,
        "username": created_user.username,
        "email": created_user.email
    }


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()

    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    token = create_access_token({"username": user.username})
    
    return {"access_token": token, "token_type": "bearer"}



app.include_router(indices.router)
app.include_router(topmovers.router)
app.include_router(marketcap.router)
app.include_router(get_realtime.router)
