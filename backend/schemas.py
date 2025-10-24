from pydantic import BaseModel
from typing import Optional

class StockOut(BaseModel):
    id: int
    scrip: str
    price: float
    change: float
    pct_change: float
    market_cap: Optional[float] = None
    high_52w: Optional[float] = None
    low_52w: Optional[float] = None
    type: Optional[str] = None
    size: Optional[str] = None

    class Config:
        orm_mode = True
