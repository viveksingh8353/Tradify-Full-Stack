from fastapi import APIRouter, Query, HTTPException

router = APIRouter()


dummy_stocks = [
    # LARGE CAP
    {"name": "Reliance Industries", "price": 2450.25, "change": 22.45, "pct_change": 0.93, "size": "large"},
    {"name": "ITC", "price": 450.10, "change": -3.60, "pct_change": -0.79, "size": "large"},
    {"name": "Tata Steel", "price": 124.90, "change": 2.20, "pct_change": 1.79, "size": "large"},
    {"name": "HDFC Bank", "price": 1560.60, "change": 9.75, "pct_change": 0.63, "size": "large"},
    {"name": "ICICI Bank", "price": 980.40, "change": -4.20, "pct_change": -0.43, "size": "large"},
    {"name": "Infosys", "price": 1460.15, "change": 18.60, "pct_change": 1.29, "size": "large"},
    {"name": "TCS", "price": 3550.25, "change": 25.20, "pct_change": 0.71, "size": "large"},
    {"name": "SBI", "price": 598.45, "change": -6.50, "pct_change": -1.07, "size": "large"},
    {"name": "ONGC", "price": 190.80, "change": 3.45, "pct_change": 1.84, "size": "large"},
    {"name": "Bharat Electronics", "price": 142.35, "change": 1.25, "pct_change": 0.88, "size": "large"},

    # MID CAP
    {"name": "Union Bank of India", "price": 115.85, "change": 3.15, "pct_change": 2.79, "size": "mid"},
    {"name": "IDFC First Bank", "price": 82.60, "change": 1.20, "pct_change": 1.48, "size": "mid"},
    {"name": "Canara Bank", "price": 354.75, "change": 5.60, "pct_change": 1.60, "size": "mid"},
    {"name": "Bank of India", "price": 98.20, "change": -1.65, "pct_change": -1.65, "size": "mid"},
    {"name": "PNB", "price": 83.15, "change": 0.85, "pct_change": 1.03, "size": "mid"},
    {"name": "LIC Housing Finance", "price": 481.20, "change": -6.45, "pct_change": -1.32, "size": "mid"},
    {"name": "ABB India", "price": 4170.40, "change": 41.30, "pct_change": 1.00, "size": "mid"},
    {"name": "Cummins India", "price": 1980.55, "change": -10.40, "pct_change": -0.52, "size": "mid"},
    {"name": "L&T Finance", "price": 152.60, "change": 2.45, "pct_change": 1.63, "size": "mid"},
    {"name": "Crompton Greaves", "price": 352.10, "change": -4.10, "pct_change": -1.15, "size": "mid"},

    # SMALL CAP
    {"name": "Bandhan Bank", "price": 192.40, "change": -4.80, "pct_change": -2.43, "size": "small"},
    {"name": "Navin Fluorine", "price": 2250.30, "change": 12.40, "pct_change": 0.55, "size": "small"},
    {"name": "Fine Organics", "price": 4700.10, "change": 45.50, "pct_change": 0.97, "size": "small"},
    {"name": "KEI Industries", "price": 2900.60, "change": -12.80, "pct_change": -0.44, "size": "small"},
    {"name": "Gujarat Fluorochemicals", "price": 3255.50, "change": 25.20, "pct_change": 0.78, "size": "small"},
    {"name": "Balaji Amines", "price": 2040.15, "change": -9.60, "pct_change": -0.47, "size": "small"},
    {"name": "Deepak Nitrite", "price": 1980.80, "change": 15.80, "pct_change": 0.80, "size": "small"},
    {"name": "Aarti Industries", "price": 560.40, "change": 4.20, "pct_change": 0.75, "size": "small"},
    {"name": "BASF India", "price": 3325.60, "change": -14.50, "pct_change": -0.43, "size": "small"},
    {"name": "IEX", "price": 148.25, "change": 2.50, "pct_change": 1.71, "size": "small"},
]


VALID_SIZES = {"large", "mid", "small"}


@router.get("/top_gainers")
async def top_gainers(size: str = Query("large"), limit: int = Query(10, ge=1, le=50)):
    size = size.lower()
    if size not in VALID_SIZES:
        raise HTTPException(status_code=400, detail=f"Invalid size: {VALID_SIZES}")

    filtered = [x for x in dummy_stocks if x["size"] == size]
    filtered.sort(key=lambda x: x["pct_change"], reverse=True)
    return filtered[:limit]


@router.get("/top_losers")
async def top_losers(size: str = Query("large"), limit: int = Query(10, ge=1, le=50)):
    size = size.lower()
    if size not in VALID_SIZES:
        raise HTTPException(status_code=400, detail=f"Invalid size: {VALID_SIZES}")

    filtered = [x for x in dummy_stocks if x["size"] == size]
    filtered.sort(key=lambda x: x["pct_change"])
    return filtered[:limit]


@router.get("/top_movers")
async def top_movers():
    return {
        "status": "success",
        "source": "dummy",
        "count": len(dummy_stocks),
        "data": dummy_stocks
    }







# from fastapi import APIRouter, Query, HTTPException
# import httpx
# import os
# from dotenv import load_dotenv

# load_dotenv()
# router = APIRouter()

# FINNHUB_API_KEY = os.getenv("FINNHUB_API_KEY")

# if not FINNHUB_API_KEY:
#     raise Exception("FINNHUB_API_KEY missing in .env")

# # Symbol Mapping for NSE Stocks
# symbol_map = [
#     {"name": "Bharat Electronics", "symbol": "NSE:BEL", "size": "large"},
#     {"name": "Canara Bank", "symbol": "NSE:CANBK", "size": "large"},
#     {"name": "United Spirits", "symbol": "NSE:MCDOWELL-N", "size": "large"},
#     {"name": "ITC", "symbol": "NSE:ITC", "size": "large"},
#     {"name": "Reliance Industries", "symbol": "NSE:RELIANCE", "size": "large"},

#     {"name": "Union Bank of India", "symbol": "NSE:UNIONBANK", "size": "mid"},
#     {"name": "IDFC First Bank", "symbol": "NSE:IDFCFIRSTB", "size": "mid"},

#     {"name": "Navin Fluorine", "symbol": "NSE:NAVINFLUOR", "size": "small"},
#     {"name": "Bandhan Bank", "symbol": "NSE:BANDHANBNK", "size": "small"},
# ]

# VALID_SIZES = {"large", "mid", "small"}


# async def fetch_stock(symbol: str):
#     url = f"https://finnhub.io/api/v1/quote?symbol={symbol}&token={FINNHUB_API_KEY}"

#     async with httpx.AsyncClient() as client:
#         response = await client.get(url)

#     if response.status_code != 200:
#         return None

#     data = response.json()

#     return {
#         "price": data.get("c", 0),
#         "change": data.get("d", 0),
#         "pct_change": data.get("dp", 0)
#     }


# @router.get("/top_gainers")
# async def top_gainers(size: str = Query("large"), limit: int = Query(10, ge=1, le=50)):
#     size = size.lower()
#     if size not in VALID_SIZES:
#         raise HTTPException(status_code=400, detail=f"Invalid size: {VALID_SIZES}")

#     filtered = [x for x in symbol_map if x["size"] == size]
#     result = []

#     for stock in filtered:
#         live = await fetch_stock(stock["symbol"])
#         if live:
#             price = live.get("c") or 0
#             change = live.get("d") or 0
#             pct_change = live.get("dp") or 0

#             result.append({
#                 "name": stock["name"],
#                 "price": price,
#                 "change": change,
#                 "pct_change": pct_change,
#                 "size": stock["size"]
#             })

#     # Safe Sort
#     result.sort(key=lambda x: (x["pct_change"] or 0), reverse=True)
#     return result[:limit]



# @router.get("/top_losers")
# async def top_losers(size: str = Query("large"), limit: int = Query(10, ge=1, le=50)):
#     size = size.lower()
#     if size not in VALID_SIZES:
#         raise HTTPException(status_code=400, detail=f"Invalid size: {VALID_SIZES}")

#     filtered = [x for x in symbol_map if x["size"] == size]
#     result = []

#     for stock in filtered:
#         live = await fetch_stock(stock["symbol"])
#         if live:
#             result.append({
#                 "name": stock["name"],
#                 "price": live["price"],
#                 "change": live["change"],
#                 "pct_change": live["pct_change"],
#                 "size": stock["size"]
#             })

#     # sort ascending % change → losers
#     result.sort(key=lambda x: x["pct_change"])
#     return result[:limit]
