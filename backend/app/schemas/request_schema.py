from pydantic import BaseModel

class PredictionRequest(BaseModel):

    rank: int

    category: str

    round: str

    domicile: str