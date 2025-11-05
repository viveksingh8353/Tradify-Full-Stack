from pydantic import BaseModel, EmailStr
from typing import Optional



class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True  


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
        from_attributes = True 