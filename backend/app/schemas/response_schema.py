from pydantic import BaseModel
from typing import List

class BranchPrediction(BaseModel):

    Branch: str

    StatisticalProb: float

    MLProb: float

    FinalProbability: float

    Competitiveness: float

    CounsellingScore: float

    ExpectedClosingRank: int

    RankGap: int

    Status: str


class PredictionResponse(BaseModel):

    predictions: List[BranchPrediction]