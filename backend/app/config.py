from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "models" / "xgb_model.pkl"

ENCODER_PATH = BASE_DIR / "models" / "onehot_encoder.pkl"

FINAL_DF_PATH = BASE_DIR.parent.parent / "data" / "processed" / "final_df.csv"
