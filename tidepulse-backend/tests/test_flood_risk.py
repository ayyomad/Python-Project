# filepath: f:\Projects\Python Project\tidepulse-backend\tests\test_flood_risk.py

from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_calculate_flood_risk():
    response = client.post(
        "/api/v1/flood-risk",
        json={
            "rainfall": 120,
            "tide_level": 5.5,
            "wind_speed": 20,
            "past_flood_alerts": 3,
        },
    )
    assert response.status_code == 200
    assert response.json()["risk_level"] in ["Low", "Medium", "High"]