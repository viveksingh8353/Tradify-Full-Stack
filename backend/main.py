from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from auth import create_user, get_current_user, verify_password, create_access_token
from models import User, Stock
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from seed_stocks import SessionLocal;

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

from pydantic import BaseModel

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
        from_attributes = True  # Pydantic v2 ke liye




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


@app.get("/stocks", response_model=List[StockOut])
def get_stocks(
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    db: Session = Depends(get_db)
):
    return db.query(Stock).order_by(Stock.id).offset(offset).limit(limit).all()

@app.get("/dashboard")
def dashboard(current_user: User = Depends(get_current_user)):
    return {"message": f"Welcome {current_user.username} to your dashboard"}

@app.get("/portfolio")
def portfolio(current_user: User = Depends(get_current_user)):
    return {"message": f"Here is {current_user.username}'s portfolio data."}


@app.get("/indices", response_model=List[StockOut])
def indices(db: Session = Depends(get_db)):
    return db.query(Stock).filter(Stock.type == "index").all()

@app.get("/top_gainers", response_model=List[StockOut])
def top_gainers(size: str = "Large", limit: int = 10, db: Session = Depends(get_db)):
    return db.query(Stock).filter(Stock.type == "gainer", Stock.size == size).order_by(Stock.pct_change.desc()).limit(limit).all()

@app.get("/top_losers", response_model=List[StockOut])
def top_losers(size: str = "Large", limit: int = 10, db: Session = Depends(get_db)):
    return db.query(Stock).filter(Stock.type == "loser", Stock.size == size).order_by(Stock.pct_change).limit(limit).all()

@app.get("/market_cap", response_model=List[StockOut])
def top_market_cap(limit: int = 10, db: Session = Depends(get_db)):
    return db.query(Stock).filter(Stock.type == "market_cap").order_by(Stock.market_cap.desc()).limit(limit).all()