from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Stock
from schemas import StockOut
from typing import List

router = APIRouter()

# Indices ke liye kaunse stocks/ETFs dikhana hai:
INDICES_SYMBOLS = [
    "RELIANCE.BSE",  # Reliance Industries
    "TATAMOTORS.BSE",  # Tata Motors
    "INFY.BSE",  # Infosys
    # ...or jo bhi stocks tum dikhana chahte ho
]

# Top Gainers ke liye tumhare favourite ya market ke top stocks ka list:
GAINERS_SYMBOLS = [
    "DIVISLAB.BSE",
    "DRREDDY.BSE",
    "TCS.BSE",
    # aur bhi company symbols add karo jo tumhe chahiye
]

# Top Losers list (same tarah se):
LOSERS_SYMBOLS = [
    "IOC.BSE",
    "HINDZINC.BSE",
    "BAJAJ-AUTO.BSE",
    # aur bhi
]


@router.get("/indices", response_model=List[StockOut])
def indices(db: Session = Depends(get_db)):
    # Pehle sab records fetch karo, neeche unique filter lagao
    records = db.query(Stock).filter(Stock.type == "index").order_by(Stock.id.desc()).all()

    unique = {}
    for rec in records:
        # sirf pehli bar dikhna chahiye scrip
        if rec.scrip not in unique:
            unique[rec.scrip] = rec

    return list(unique.values())

@router.get("/top_gainers", response_model=List[StockOut])
def top_gainers(db: Session = Depends(get_db)):
    records = db.query(Stock).filter(Stock.type == "gainer").order_by(Stock.pct_change.desc()).all()
    unique = {}
    for rec in records:
        if rec.scrip not in unique:
            unique[rec.scrip] = rec
    return list(unique.values())[:10]  # Sirf top 10 unique


@router.get("/top_losers", response_model=List[StockOut])
def top_losers(db: Session = Depends(get_db)):
    records = db.query(Stock).filter(Stock.type == "loser").order_by(Stock.pct_change).all()
    unique = {}
    for rec in records:
        if rec.scrip not in unique:
            unique[rec.scrip] = rec
    return list(unique.values())[:10]


# @router.get("/top_market_cap", response_model=List[StockOut])
# def top_market_cap(db: Session = Depends(get_db)):
#     records = db.query(Stock).order_by(Stock.market_cap.desc()).all()
#     unique = {}
#     for rec in records:
#         if rec.scrip not in unique:
#             unique[rec.scrip] = rec
#     return list(unique.values())[:10]
