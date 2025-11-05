from sqlalchemy import Column, Integer, String, Float
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)

class Stock(Base):
    __tablename__ = "stocks"

    id = Column(Integer, primary_key=True, index=True)
    scrip = Column(String(100), index=True, nullable=False)
    price = Column(Float)
    change = Column(Float)
    pct_change = Column(Float)
    market_cap = Column(Float)
    high_52w = Column(Float)
    low_52w = Column(Float)
    type = Column(String(40), index=True)
    size = Column(String(12))
