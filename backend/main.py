from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.predict import router as predict_router

# ---------------------------------------------------
# FASTAPI APP
# ---------------------------------------------------

app = FastAPI(
    title="MITS Counselling Prediction API",
    version="1.0.0"
)

# ---------------------------------------------------
# CORS
# ---------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------
# ROUTES
# ---------------------------------------------------

app.include_router(
    predict_router,
    prefix="/api"
)

# ---------------------------------------------------
# ROOT ROUTE
# ---------------------------------------------------

@app.get("/")

def home():

    return {
        "message":
        "MITS Counselling Prediction API Running"
    }