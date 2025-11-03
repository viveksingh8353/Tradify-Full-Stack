from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from auth import create_user, verify_password, create_access_token
from models import User, Stock
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from routers import indices, topmovers, marketcap


Base.metadata.create_all(bind=engine)

app = FastAPI()

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

class StockOut(BaseModel):
    id: int
    scrip: str
    price: float
    change: float
    pct_change: float
    market_cap: float | None = None
    high_52w: float | None = None
    low_52w: float | None = None
    type: str | None = None
    size: str | None = None

    class Config:
        from_attributes = True  




class UserCreate(BaseModel):
    username: str
    email: str
    password: str



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def wellcome():
    return {"Welcome to Tradify"}

@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    if db.query(User).filter((User.username == user.username) | (User.email == user.email)).first():
        raise HTTPException(status_code=400, detail="Username or email already registered")
    created_user = create_user(db, user.username, user.email, user.password)
    return {"username": created_user.username, "email": created_user.email, "id": created_user.id}

@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}


# app.include_router(user_routes.router)
# app.include_router(stock_routes.router)
# app.include_router(topmovers_routes.router)
# app.include_router(realtime_routes.router) 

app.include_router(indices.router)
app.include_router(topmovers.router)
app.include_router(marketcap.router)

