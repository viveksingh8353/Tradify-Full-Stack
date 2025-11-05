from fastapi import APIRouter, HTTPException
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

FINNHUB_API_KEY = os.getenv("FINNHUB_API_KEY")
FINNHUB_URL = "https://finnhub.io/api/v1/quote"


@router.get("/realtime/{symbol}")
async def get_realtime(symbol: str):
    if not FINNHUB_API_KEY:
        raise HTTPException(status_code=500, detail="API Key not configured")

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(
                FINNHUB_URL,
                params={"symbol": symbol, "token": FINNHUB_API_KEY}
            )
    except httpx.RequestError:
        raise HTTPException(status_code=500, detail="Error connecting to data provider")

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Failed to fetch stock data")

    data = response.json()

   
    if not data or "c" not in data or data["c"] == 0:
        raise HTTPException(status_code=404, detail=f"No valid data found for '{symbol}'")

    return {
        "symbol": symbol.upper(),
        "current_price": data["c"],
        "open": data["o"],
        "high": data["h"],
        "low": data["l"],
        "previous_close": data["pc"],
        "timestamp": data["t"]
    }
