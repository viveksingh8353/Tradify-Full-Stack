from fastapi import APIRouter

router = APIRouter()

top_market_cap_data = [
    {"company": "Reliance Industries", "price": 1486.4, "change": -2.10, "pct_change": -0.14, "market_cap": 201424000, "high_52w": 1551, "low_52w": 1114.85},
    {"company": "HDFC Bank", "price": 987.3, "change": -10.85, "pct_change": -1.09, "market_cap": 153474700, "high_52w": 1020.5, "low_52w": 812.15},
    {"company": "Bharti Airtel", "price": 2054.5, "change": -11.80, "pct_change": -0.57, "market_cap": 123984600, "high_52w": 2110.4, "low_52w": 1511},
    {"company": "Tata Consultancy Services", "price": 3058, "change": 22.70, "pct_change": 0.75, "market_cap": 109828800, "high_52w": 4494.9, "low_52w": 2866.6},
    {"company": "ICICI Bank", "price": 1345.3, "change": -17.10, "pct_change": -1.26, "market_cap": 97356100, "high_52w": 1500, "low_52w": 1186},
    {"company": "State Bank of India", "price": 937, "change": 2.65, "pct_change": 0.28, "market_cap": 86223100, "high_52w": 944.9, "low_52w": 680},
    {"company": "Bajaj Finance", "price": 1042.8, "change": -9.50, "pct_change": -0.90, "market_cap": 65457300, "high_52w": 1102.5, "low_52w": 645.1},
    {"company": "Infosys", "price": 1482.3, "change": -11.50, "pct_change": -0.77, "market_cap": 62050100, "high_52w": 2006.45, "low_52w": 1307},
    {"company": "Hindustan Unilever", "price": 2465.5, "change": -4.10, "pct_change": -0.17, "market_cap": 58025500, "high_52w": 2750, "low_52w": 2136},
    {"company": "Life Insurance Corporation of India Ltd.", "price": 894.7, "change": -6.05, "pct_change": -0.67, "market_cap": 56956600, "high_52w": 1007.8, "low_52w": 715.3},
    {"company": "Larsen & Toubro", "price": 4030.9, "change": 43.40, "pct_change": 1.09, "market_cap": 54855400, "high_52w": 4062.6, "low_52w": 2965.3},
    {"company": "ITC", "price": 420.35, "change": 1.60, "pct_change": 0.38, "market_cap": 52454000, "high_52w": 471.5, "low_52w": 390.15},
    {"company": "Maruti Suzuki India", "price": 16186, "change": -20.00, "pct_change": -0.12, "market_cap": 50950800, "high_52w": 16660, "low_52w": 10725},
    {"company": "Mahindra & Mahindra", "price": 3487.2, "change": -14.90, "pct_change": -0.43, "market_cap": 43534700, "high_52w": 3723.8, "low_52w": 2425},
]


@router.get("/top_market_cap")
def top_market_cap(limit: int = 14):
    # limit param for safety or pagination
    return top_market_cap_data[:limit]