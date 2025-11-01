from fastapi import APIRouter, Query

router = APIRouter()

gainers_data = [
    # Largecaps (17)
    {"id": 1, "name": "Bharat Electronics", "price": 426.1, "change": 16.2, "pct_change": 3.95, "size": "large"},
    {"id": 2, "name": "Canara Bank", "price": 136.99, "change": 4.1, "pct_change": 3.09, "size": "large"},
    {"id": 3, "name": "United Spirits", "price": 1431.4, "change": 36.8, "pct_change": 2.64, "size": "large"},
    {"id": 4, "name": "ITC", "price": 415.2, "change": 8.1, "pct_change": 2.00, "size": "large"},
    {"id": 5, "name": "Reliance Industries", "price": 2367.2, "change": 52.4, "pct_change": 2.27, "size": "large"},
    {"id": 6, "name": "Adani Ports", "price": 736.8, "change": 17.6, "pct_change": 2.45, "size": "large"},
    {"id": 7, "name": "HDFC Bank", "price": 1630.4, "change": 38.5, "pct_change": 2.42, "size": "large"},
    {"id": 8, "name": "Bajaj Finance", "price": 7429.5, "change": 172, "pct_change": 2.37, "size": "large"},
    {"id": 9, "name": "SBI Life", "price": 1305.95, "change": 31.55, "pct_change": 2.47, "size": "large"},
    {"id": 10, "name": "Larsen & Toubro", "price": 4045.5, "change": 94, "pct_change": 2.38, "size": "large"},
    {"id": 11, "name": "Tata Motors", "price": 680.3, "change": 15.2, "pct_change": 2.28, "size": "large"},
    {"id": 12, "name": "Infosys", "price": 1752.2, "change": 39.6, "pct_change": 2.45, "size": "large"},
    {"id": 13, "name": "ICICI Bank", "price": 974.1, "change": 22.3, "pct_change": 2.34, "size": "large"},
    {"id": 14, "name": "Axis Bank", "price": 851.6, "change": 20.1, "pct_change": 2.42, "size": "large"},
    {"id": 15, "name": "Asian Paints", "price": 3251.0, "change": 76.3, "pct_change": 2.36, "size": "large"},
    {"id": 16, "name": "HCL Technologies", "price": 1378.9, "change": 32, "pct_change": 2.38, "size": "large"},
    {"id": 17, "name": "Maruti Suzuki", "price": 9492.3, "change": 296, "pct_change": 3.22, "size": "large"},
    # Midcaps (16)
    {"id": 18, "name": "Union Bank of India", "price": 148.67, "change": 6.35, "pct_change": 4.46, "size": "mid"},
    {"id": 19, "name": "IDFC First Bank", "price": 81.77, "change": 2.84, "pct_change": 3.6, "size": "mid"},
    {"id": 20, "name": "Aurobindo Pharma", "price": 1138.9, "change": 36.4, "pct_change": 3.3, "size": "mid"},
    {"id": 21, "name": "SRF", "price": 2297.2, "change": 51.9, "pct_change": 2.31, "size": "mid"},
    {"id": 22, "name": "Max Financial", "price": 882.4, "change": 17.9, "pct_change": 2.07, "size": "mid"},
    {"id": 23, "name": "United Breweries", "price": 1567, "change": 38.4, "pct_change": 2.52, "size": "mid"},
    {"id": 24, "name": "Can Fin Homes", "price": 612.7, "change": 14.5, "pct_change": 2.42, "size": "mid"},
    {"id": 25, "name": "Cholamandalam", "price": 1173.6, "change": 27.2, "pct_change": 2.37, "size": "mid"},
    {"id": 26, "name": "AU Small Finance", "price": 725.8, "change": 18.1, "pct_change": 2.56, "size": "mid"},
    {"id": 27, "name": "Aditya Birla Capital", "price": 208.6, "change": 5.1, "pct_change": 2.51, "size": "mid"},
    {"id": 28, "name": "Jindal Steel", "price": 598.1, "change": 15.4, "pct_change": 2.64, "size": "mid"},
    {"id": 29, "name": "Mphasis", "price": 2761.4, "change": 63.7, "pct_change": 2.36, "size": "mid"},
    {"id": 30, "name": "Jubilant Foodworks", "price": 583.2, "change": 13.8, "pct_change": 2.43, "size": "mid"},
    {"id": 31, "name": "IndiaMART", "price": 2850.6, "change": 73.6, "pct_change": 2.65, "size": "mid"},
    {"id": 32, "name": "Aarti Industries", "price": 952.1, "change": 24.3, "pct_change": 2.61, "size": "mid"},
    {"id": 33, "name": "L&T Tech Services", "price": 4746.2, "change": 111.5, "pct_change": 2.41, "size": "mid"},
    # Smallcaps (17)
    {"id": 34, "name": "Navin Fluorine", "price": 5687.4, "change": 710.6, "pct_change": 14.28, "size": "small"},
    {"id": 35, "name": "Inventurus", "price": 1645.9, "change":78.8, "pct_change":5.03, "size": "small"},
    {"id": 36, "name": "Welspun Corp", "price": 965.75, "change": 39.6, "pct_change": 4.28, "size": "small"},
    {"id": 37, "name": "KPR Mills", "price": 712.4, "change": 24.8, "pct_change": 3.61, "size": "small"},
    {"id": 38, "name": "KEI Industries", "price": 1872.6, "change": 57.7, "pct_change": 3.18, "size": "small"},
    {"id": 39, "name": "HFCL", "price": 74.3, "change": 2.5, "pct_change": 3.48, "size": "small"},
    {"id": 40, "name": "Tanla Platforms", "price": 1229.1, "change": 39.3, "pct_change": 3.31, "size": "small"},
    {"id": 41, "name": "Solara Active Pharma", "price": 347.5, "change": 14.6, "pct_change": 4.39, "size": "small"},
    {"id": 42, "name": "PNC Infratech", "price": 402.9, "change": 12.2, "pct_change": 3.12, "size": "small"},
    {"id": 43, "name": "Affle India", "price": 1400.8, "change": 43.5, "pct_change": 3.2, "size": "small"},
    {"id": 44, "name": "Rossari Biotech", "price": 575.2, "change": 23.6, "pct_change": 4.28, "size": "small"},
    {"id": 45, "name": "Sejal Glass", "price": 181.4, "change": 7.1, "pct_change": 4.08, "size": "small"},
    {"id": 46, "name": "EaseMyTrip", "price": 54.8, "change": 2.1, "pct_change": 4.00, "size": "small"},
    {"id": 47, "name": "Fine Organic", "price": 4414.2, "change": 126.8, "pct_change": 2.96, "size": "small"},
    {"id": 48, "name": "ISEC", "price": 732.5, "change": 17.7, "pct_change": 2.48, "size": "small"},
    {"id": 49, "name": "Amber Enterprises", "price": 2375.5, "change": 78.1, "pct_change": 3.40, "size": "small"},
    {"id": 50, "name": "Shilpa Medicare", "price": 486.1, "change": 14.2, "pct_change": 3.01, "size": "small"}
]


losers_data = [
    # Largecaps (18)
    {"id": 1, "name": "Eternal (Zomato)", "price": 317.75, "change": -11.6, "pct_change": -3.52, "size": "large"},
    {"id": 2, "name": "Varun Beverages", "price": 469.65, "change": -15.6, "pct_change": -3.21, "size": "large"},
    {"id": 3, "name": "Adani Power", "price": 157.85, "change": -4.72, "pct_change": -2.90, "size": "large"},
    {"id": 4, "name": "Avenue Supermarts", "price": 4112.1, "change": -122.3, "pct_change": -2.89, "size": "large"},
    {"id": 5, "name": "Tata Steel", "price": 1167.2, "change": -34.5, "pct_change": -2.87, "size": "large"},
    {"id": 6, "name": "BPCL", "price": 374.8, "change": -10.7, "pct_change": -2.78, "size": "large"},
    {"id": 7, "name": "Grasim Industries", "price": 1712.5, "change": -47.1, "pct_change": -2.68, "size": "large"},
    {"id": 8, "name": "UltraTech Cement", "price": 7116.4, "change": -187.6, "pct_change": -2.57, "size": "large"},
    {"id": 9, "name": "ONGC", "price": 139.4, "change": -3.5, "pct_change": -2.45, "size": "large"},
    {"id": 10, "name": "JSW Steel", "price": 759.7, "change": -20.8, "pct_change": -2.67, "size": "large"},
    {"id": 11, "name": "Hindalco", "price": 426.8, "change": -10.1, "pct_change": -2.31, "size": "large"},
    {"id": 12, "name": "Bajaj Finserv", "price": 1491.4, "change": -34.2, "pct_change": -2.24, "size": "large"},
    {"id": 13, "name": "Bharti Airtel", "price": 1409.3, "change": -29.4, "pct_change": -2.05, "size": "large"},
    {"id": 14, "name": "Power Grid", "price": 221.4, "change": -6.5, "pct_change": -2.85, "size": "large"},
    {"id": 15, "name": "Tech Mahindra", "price": 1217.8, "change": -28.7, "pct_change": -2.30, "size": "large"},
    {"id": 16, "name": "Britannia", "price": 4335.5, "change": -91.7, "pct_change": -2.07, "size": "large"},
    {"id": 17, "name": "Nestle India", "price": 23241.3, "change": -405.8, "pct_change": -1.72, "size": "large"},
    {"id": 18, "name": "Eicher Motors", "price": 3613.6, "change": -79.9, "pct_change": -2.16, "size": "large"},
    # Midcaps (17)
    {"id": 19, "name": "Motilal Oswal", "price": 978, "change": -47.3, "pct_change": -4.61, "size": "mid"},
    {"id": 20, "name": "Mphasis", "price": 2764.4, "change": -129.3, "pct_change": -4.47, "size": "mid"},
    {"id": 21, "name": "360 One Wam", "price": 1080.7, "change": -38.9, "pct_change": -3.47, "size": "mid"},
    {"id": 22, "name": "Adani Total Gas", "price": 698.0, "change": -33.60, "pct_change": -4.59, "size": "mid"},
    {"id": 23, "name": "Deepak Nitrite", "price": 2092.0, "change": -101.5, "pct_change": -4.63, "size": "mid"},
    {"id": 24, "name": "Balkrishna Industries", "price": 2106.1, "change": -95.6, "pct_change": -4.34, "size": "mid"},
    {"id": 25, "name": "Page Industries", "price": 45208, "change": -1663, "pct_change": -3.55, "size": "mid"},
    {"id": 26, "name": "PI Industries", "price": 2981.8, "change": -102.1, "pct_change": -3.31, "size": "mid"},
    {"id": 27, "name": "Fortis Healthcare", "price": 367.6, "change": -13.9, "pct_change": -3.64, "size": "mid"},
    {"id": 28, "name": "Alkem Labs", "price": 3629.0, "change": -157, "pct_change": -4.15, "size": "mid"},
    {"id": 29, "name": "Prestige Estates", "price": 860.3, "change": -32.2, "pct_change": -3.61, "size": "mid"},
    {"id": 30, "name": "Syngene Intl", "price": 781.1, "change": -29.4, "pct_change": -3.63, "size": "mid"},
    {"id": 31, "name": "Linde India", "price": 7050.5, "change": -210, "pct_change": -2.89, "size": "mid"},
    {"id": 32, "name": "Tube Investments", "price": 3195.7, "change": -111, "pct_change": -3.36, "size": "mid"},
    {"id": 33, "name": "Supreme Inds", "price": 3592.2, "change": -124, "pct_change": -3.34, "size": "mid"},
    {"id": 34, "name": "Godfrey Phillips", "price": 2060.9, "change": -81.2, "pct_change": -3.79, "size": "mid"},
    {"id": 35, "name": "Birlasoft", "price": 567.7, "change": -19, "pct_change": -3.24, "size": "mid"},
    # Smallcaps (15)
    {"id": 36, "name": "Bandhan Bank", "price": 156.56, "change": -14.02, "pct_change": -8.22, "size": "small"},
    {"id": 37, "name": "Sagility", "price": 52.54, "change": -2.04, "pct_change": -3.74, "size": "small"},
    {"id": 38, "name": "Devyani", "price": 161.8, "change": -6.0, "pct_change": -3.58, "size": "small"},
    {"id": 39, "name": "PNB Housing", "price": 662.7, "change": -44.8, "pct_change": -6.33, "size": "small"},
    {"id": 40, "name": "KIMS", "price": 1810.7, "change": -96.5, "pct_change": -5.07, "size": "small"},
    {"id": 41, "name": "Nazara Tech", "price": 664.1, "change": -32.3, "pct_change": -4.64, "size": "small"},
    {"id": 42, "name": "Prestige Estates", "price": 860.3, "change": -32.2, "pct_change": -3.61, "size": "small"},
    {"id": 43, "name": "MapmyIndia", "price": 1596.2, "change": -72.3, "pct_change": -4.33, "size": "small"},
    {"id": 44, "name": "Dixon Tech", "price": 5786, "change": -249, "pct_change": -4.12, "size": "small"},
    {"id": 45, "name": "Equitas Bank", "price": 111.2, "change": -6.1, "pct_change": -5.19, "size": "small"},
    {"id": 46, "name": "HFCL", "price": 74.3, "change": -2.5, "pct_change": -3.25, "size": "small"},
    {"id": 47, "name": "Mold-Tek Tech", "price": 896.1, "change": -28.2, "pct_change": -3.05, "size": "small"},
    {"id": 48, "name": "Fine Organic", "price": 4414.2, "change": -126.8, "pct_change": -2.79, "size": "small"},
    {"id": 49, "name": "Amber Enterprises", "price": 2375.5, "change": -78.1, "pct_change": -3.18, "size": "small"},
    {"id": 50, "name": "Shilpa Medicare", "price": 486.1, "change": -14.2, "pct_change": -2.8, "size": "small"}
]


@router.get("/top_gainers")
def top_gainers(size: str = Query(default="large"), limit: int = 10):
    filtered = [x for x in gainers_data if x["size"] == size]
    return filtered[:limit]

@router.get("/top_losers")
def top_losers(size: str = Query(default="large"), limit: int = 10):
    filtered = [x for x in losers_data if x["size"] == size]
    return filtered[:limit]
