from fastapi import APIRouter

from app.schemas.request_schema import (
    PredictionRequest
)

from app.services.prediction_service import (
    predict_branches
)

router = APIRouter()


@router.post("/predict")

def predict(
    request: PredictionRequest
):

    results = predict_branches(

        user_rank=request.rank,

        user_category=request.category,

        user_round=request.round,

        user_domicile=request.domicile
    )

    return {
        "predictions": results
    }