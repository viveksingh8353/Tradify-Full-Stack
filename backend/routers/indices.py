from fastapi import APIRouter

router = APIRouter()

@router.get("/indices")
def indices():
    return [
        {"name": "SENSEX", "price": 83938.71, "change": 0.0, "pct_change": 0.00},
        {"name": "NIFTY", "price": 25722.1, "change": 0.0, "pct_change": 0.00},
        {"name": "BANKNIFTY", "price": 57776.35, "change": 0.0, "pct_change": 0.00},
        {"name": "NIFTYMIDSELECT", "price": 13467.85, "change": 0.0, "pct_change": 0.00},
        {"name": "FINNIFTY", "price": 19725.50, "change": 34.55, "pct_change": 0.18},
        {"name": "TATA MOTER", "price": 410.10, "change": 2.35, "pct_change": 0.57},

    ]
