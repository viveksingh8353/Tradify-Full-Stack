
from fastapi import APIRouter, HTTPException
import httpx
import asyncio

router = APIRouter()


COMPANIES = [
    "RELIANCE", "HDFCBANK", "BHARTIARTL", "TCS", "ICICIBANK",
    "SBIN", "BAJFINANCE", "INFY", "HINDUNILVR", "LICI",
    "LT", "ITC", "MARUTI", "M&M"
]

NSE_QUOTE_URL = "https://www.nseindia.com/api/quote-equity?symbol="

async def fetch_symbol(client: httpx.AsyncClient, symbol: str):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "application/json, text/plain, */*"
    }
    try:
        res = await client.get(NSE_QUOTE_URL + symbol, headers=headers, timeout=10.0)
        if res.status_code != 200:
            return None
        data = res.json()
        price_info = data.get("priceInfo") or {}
        week_hi_lo = data.get("weekHighLow") or {}
        return {
            "company": symbol,
            "price": price_info.get("lastPrice"),
            "change": price_info.get("change"),
            "pct_change": price_info.get("pChange"),
            "high_52w": week_hi_lo.get("max"),
            "low_52w": week_hi_lo.get("min"),
        }
    except Exception:
        return None

@router.get("/top_market_cap")
async def top_market_cap(limit: int = 14):
    
    symbols = COMPANIES[:max(1, min(limit, len(COMPANIES)))]
    async with httpx.AsyncClient() as client:
        tasks = [fetch_symbol(client, s) for s in symbols]
        results = await asyncio.gather(*tasks)

    results = [r for r in results if r is not None]
    if not results:
        raise HTTPException(status_code=504, detail="Failed to fetch data from NSE")
    return results
