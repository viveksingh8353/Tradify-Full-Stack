from fastapi import APIRouter, Depends
from auth import get_current_user
from models import User

router = APIRouter()

@router.get("/dashboard")
def dashboard(current_user: User = Depends(get_current_user)):
    return {"message": f"Welcome {current_user.username} to your dashboard"}

@router.get("/portfolio")
def portfolio(current_user: User = Depends(get_current_user)):
    return {"message": f"Here is {current_user.username}'s portfolio data."}

@router.get("/watchlist")
def watchlist(current_user: User = Depends(get_current_user)):
    return {"message": f"Here is {current_user.username}'s watchlist data."}

@router.post("/logout")
def logout():
    return {"message": "User logged out successfully."}
