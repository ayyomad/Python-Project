from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class FloodRiskRequest(BaseModel):
    rainfall: float
    tide_level: float
    wind_speed: float
    past_flood_alerts: int

class FloodRiskResponse(BaseModel):
    risk_level: str
    risk_score: float

@router.post("/flood-risk", response_model=FloodRiskResponse)
def calculate_flood_risk(data: FloodRiskRequest):
    # Example logic for flood risk calculation
    risk_score = (
        data.rainfall * 0.4 +
        data.tide_level * 0.3 +
        data.wind_speed * 0.2 +
        data.past_flood_alerts * 0.1
    )
    if risk_score > 70:
        risk_level = "High"
    elif risk_score > 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return FloodRiskResponse(risk_level=risk_level, risk_score=risk_score)