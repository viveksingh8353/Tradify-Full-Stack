from database import SessionLocal
from models import Stock

db = SessionLocal()
# Indices
db.add(Stock(scrip="SENSEX", price=82500.82, change=0, pct_change=0, type="index"))
db.add(Stock(scrip="NIFTY", price=25285.35, change=0, pct_change=0, type="index"))
# Top Gainers
db.add(Stock(scrip="Divi's Laboratories", price=6474.5, change=342.50, pct_change=5.59, type="gainer", size="Large"))
db.add(Stock(scrip="Cipla", price=1561.8, change=48.70, pct_change=3.22, type="gainer", size="Large"))
# Top Losers
db.add(Stock(scrip="Hindustan Zinc", price=498.3, change=-13.95, pct_change=-2.72, type="loser", size="Large"))
db.add(Stock(scrip="Jindal Steel", price=1015.2, change=-25.10, pct_change=-2.41, type="loser", size="Large"))
# Top By Market Cap
db.add(Stock(scrip="Reliance Industries", price=1381.7, change=3.90, pct_change=0.28, market_cap=186470600, high_52w=5151, low_52w=1144.85, type="market_cap"))
db.commit()
db.close()
