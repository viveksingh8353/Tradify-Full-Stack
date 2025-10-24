from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Stock
from schemas import StockOut
from typing import List
from datetime import datetime, timedelta

router = APIRouter()

@router.get("/top_gainers_week", response_model=List[StockOut])
def top_gainers_week(db: Session = Depends(get_db)):
    one_week_ago = datetime.utcnow() - timedelta(days=7)
    return db.query(Stock).filter(Stock.type == "gainer", Stock.date >= one_week_ago).order_by(Stock.pct_change.desc()).limit(10).all()

@router.get("/top_losers_week", response_model=List[StockOut])
def top_losers_week(db: Session = Depends(get_db)):
    one_week_ago = datetime.utcnow() - timedelta(days=7)
    return db.query(Stock).filter(Stock.type == "loser", Stock.date >= one_week_ago).order_by(Stock.pct_change).limit(10).all()

@router.get("/top_volume_week", response_model=List[StockOut])
def top_volume_week(db: Session = Depends(get_db)):
    one_week_ago = datetime.utcnow() - timedelta(days=7)
    return db.query(Stock).filter(Stock.date >= one_week_ago).order_by(Stock.volume.desc()).limit(10).all()
