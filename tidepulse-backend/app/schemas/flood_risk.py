# filepath: f:\Projects\Python Project\tidepulse-backend\app\schemas\flood_risk.py

from pydantic import BaseModel

class FloodRiskRequest(BaseModel):
    rainfall: float
    tide_level: float
    wind_speed: float
    past_flood_alerts: int

class FloodRiskResponse(BaseModel):
    risk_level: str
    risk_score: float