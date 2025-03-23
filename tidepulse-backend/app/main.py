from fastapi import FastAPI
from app.api.v1.endpoints import flood_risk

# Initialize FastAPI app
app = FastAPI(
    title="TidePulse Backend",
    description="API for Coastal Flood Risk Forecaster",
    version="1.0.0",
)

# Include routers
app.include_router(flood_risk.router, prefix="/api/v1", tags=["Flood Risk"])

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the TidePulse Backend!"}