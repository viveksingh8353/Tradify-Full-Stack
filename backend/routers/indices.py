from fastapi import APIRouter, HTTPException
import httpx
import os

router = APIRouter()

FINNHUB_API_KEY = os.getenv("FINNHUB_API_KEY")

INDICES = [
    {"name": "APPLE", "symbol": "AAPL"},
    {"name": "SENSEX", "symbol": "BSE:SENSEX"},
    {"name": "NIFTY 50", "symbol": "NSE:NIFTY_50"},
    {"name": "BANKNIFTY", "symbol": "NSE:BANKNIFTY"},
]

@router.get("/indices")
async def get_indices():
    if not FINNHUB_API_KEY:
        raise HTTPException(status_code=500, detail="FINNHUB API Key Not Configured")

    results = []

    async with httpx.AsyncClient() as client:
        for idx in INDICES:
            url = "https://finnhub.io/api/v1/quote"
            params = {"symbol": idx["symbol"], "token": FINNHUB_API_KEY}

            res = await client.get(url, params=params)

            if res.status_code != 200:
                raise HTTPException(status_code=500, detail="API Fetch Failed")

            data = res.json()

            results.append({
                "name": idx["name"],
                "price": data.get("c", 0),
                "change": data.get("d", 0),
                "pct_change": data.get("dp", 0),
            })

    return results
