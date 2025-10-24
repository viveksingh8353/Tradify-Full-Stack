import requests
from fastapi import APIRouter, HTTPException

router = APIRouter()
ALPHA_VANTAGE_API_KEY = "WP49VUL3ATRQWZL6"    # step 1 se laayi hui key

# Example - jis jis stock ka live dikhana hai, unke symbol
INDICES_SYMBOLS = ["RELIANCE.BSE", "TATAMOTORS.BSE"]
GAINERS_SYMBOLS = ["DIVISLAB.BSE", "CIPLA.BSE"]
LOSERS_SYMBOLS = ["HINDZINC.BSE", "JINDALSTEL.BSE"]

def get_realtime(symbol):
    url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={ALPHA_VANTAGE_API_KEY}"
    response = requests.get(url)
    data = response.json().get("Global Quote", {})
    if not data:
        raise HTTPException(status_code=404, detail=f"Data not found for {symbol}")
    return {
        "scrip": data.get("01. symbol"),
        "price": float(data.get("05. price", 0)),
        "change": float(data.get("09. change", 0)),
        "pct_change": float(data.get("10. change percent", "0%").replace("%", "")),
    }

@router.get("/indices")
def indices():
    out = []
    for symbol in INDICES_SYMBOLS:
        try:
            out.append(get_realtime(symbol))
        except Exception:
            continue
    return out

@router.get("/top_gainers")
def top_gainers():
    out = []
    for symbol in GAINERS_SYMBOLS:
        try:
            out.append(get_realtime(symbol))
        except Exception:
            continue
    out.sort(key=lambda x: x['pct_change'], reverse=True)
    return out[:10]

@router.get("/top_losers")
def top_losers():
    out = []
    for symbol in LOSERS_SYMBOLS:
        try:
            out.append(get_realtime(symbol))
        except Exception:
            continue
    out.sort(key=lambda x: x['pct_change'])
    return out[:10]
