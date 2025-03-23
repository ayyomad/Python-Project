# filepath: f:\Projects\Python Project\tidepulse-backend\app\services\flood_risk_calculator.py

def calculate_risk_score(rainfall, tide_level, wind_speed, past_flood_alerts):
    return (
        rainfall * 0.4 +
        tide_level * 0.3 +
        wind_speed * 0.2 +
        past_flood_alerts * 0.1
    )