import joblib
import pandas as pd
import numpy as np

from app.config import (
    MODEL_PATH,
    ENCODER_PATH,
    FINAL_DF_PATH
)

from app.runtime_config import (

    CURRENT_YEAR,

    CURRENT_TOTAL_CANDIDATES,

    CATEGORY_SEAT_MATRIX,

    BRANCH_TOTAL_SEATS
)

from app.services.future_cutoff_engine import (

    estimate_future_percentile,

    estimate_future_closing_rank
)

# ---------------------------------------------------
# LOAD ARTIFACTS
# ---------------------------------------------------

model = joblib.load(MODEL_PATH)

ohe = joblib.load(ENCODER_PATH)

final_df = pd.read_csv(FINAL_DF_PATH)

# ---------------------------------------------------
# PROBABILITY FUNCTIONS
# ---------------------------------------------------

def calculate_probability(
    user_p,
    mean_p,
    std_p,
    trend
):

    adjusted_mean = mean_p + trend

    delta = user_p - adjusted_mean

    probability = (
        1 / (1 + np.exp(-25 * delta))
    )

    probability *= (
        1 - min(std_p, 0.3)
    )

    return probability * 100


# ---------------------------------------------------
# GAP SCORE
# ---------------------------------------------------

def calculate_gap_score(rank_gap):

    if rank_gap >= 50000:
        return 100

    elif rank_gap >= 20000:
        return 85

    elif rank_gap >= 5000:
        return 70

    elif rank_gap >= 0:
        return 55

    else:
        return max(
            5,
            55 - abs(rank_gap) / 2000
        )


# ---------------------------------------------------
# STATUS CLASSIFICATION
# ---------------------------------------------------

def classify(prob):

    if prob >= 85:
        return "Very Safe"

    elif prob >= 70:
        return "Safe"

    elif prob >= 50:
        return "Moderate"

    else:
        return "Risky"


# ---------------------------------------------------
# MAIN PREDICTION FUNCTION
# ---------------------------------------------------

def predict_branches(

    user_rank,
    user_category,
    user_round,
    user_domicile
):

    # ---------------------------------------------
    # USER PERCENTILE
    # ---------------------------------------------

    user_percentile = (

        1 -

        (
            user_rank /
            CURRENT_TOTAL_CANDIDATES
        )
    )

    # ---------------------------------------------
    # FILTER DATA
    # ---------------------------------------------

    filtered_df = final_df[

        (final_df["Category"] == user_category) &

        (final_df["Round"] == user_round) &

        (final_df["Domicile"] == user_domicile)
    ].copy()

    # ---------------------------------------------
    # RESULTS
    # ---------------------------------------------

    results = []

    # ---------------------------------------------
    # LOOP
    # ---------------------------------------------

    for _, row in filtered_df.iterrows():

        # -----------------------------------------
        # FUTURE CATEGORY SEATS
        # -----------------------------------------

        future_branch_seats = (

            CATEGORY_SEAT_MATRIX.get(

                (
                    row["Branch"],
                    user_category
                ),

                row["BranchSeats"]
            )
        )

        # -----------------------------------------
        # TOTAL BRANCH SEATS
        # -----------------------------------------

        branch_total_seats = (

            BRANCH_TOTAL_SEATS.get(

                row["Branch"],

                row["TotalSeats"]
            )
        )

        # -----------------------------------------
        # FUTURE PERCENTILE
        # -----------------------------------------

        future_percentile = estimate_future_percentile(

            historical_percentile=row["MeanP"],

            trend=row["Trend"],

            historical_branch_seats=row["BranchSeats"],

            future_branch_seats=future_branch_seats,

            historical_candidates=row["TotalCandidates"],

            future_candidates=CURRENT_TOTAL_CANDIDATES
        )

        # -----------------------------------------
        # FUTURE CLOSING RANK
        # -----------------------------------------

        future_closing_rank = estimate_future_closing_rank(

            future_percentile,

            CURRENT_TOTAL_CANDIDATES
        )

        # -----------------------------------------
        # RANK GAP
        # -----------------------------------------

        rank_gap = (

            future_closing_rank -

            user_rank
        )

        # -----------------------------------------
        # STATISTICAL PROBABILITY
        # -----------------------------------------

        stat_prob = calculate_probability(

            user_percentile,

            future_percentile,

            row["StdP"],

            row["Trend"]
        )

        # -----------------------------------------
        # GAP SCORE
        # -----------------------------------------

        gap_score = calculate_gap_score(
            rank_gap
        )

        # -----------------------------------------
        # FINAL STATISTICAL SCORE
        # -----------------------------------------

        statistical_probability = (

            0.7 * stat_prob +

            0.3 * gap_score
        )

        # -----------------------------------------
        # ML INPUT
        # -----------------------------------------

        input_df = pd.DataFrame({

            "Year": [CURRENT_YEAR],

            "Rank": [user_rank],

            "TotalCandidates":
                [CURRENT_TOTAL_CANDIDATES],

            "TotalSeats":
                [branch_total_seats],

            "BranchSeats":
                [future_branch_seats],

            "RankPercentile":
                [user_percentile],

            "SeatShare":
                [
                    future_branch_seats /
                    branch_total_seats
                ],

            "Branch":
                [row["Branch"]],

            "Category":
                [user_category],

            "Round":
                [user_round],

            "Domicile":
                [user_domicile]
        })

        # -----------------------------------------
        # CATEGORICAL COLUMNS
        # -----------------------------------------

        categorical_cols = [

            "Branch",
            "Category",
            "Round",
            "Domicile"
        ]

        # -----------------------------------------
        # OHE TRANSFORM
        # -----------------------------------------

        encoded = ohe.transform(
            input_df[categorical_cols]
        )

        encoded_df = pd.DataFrame(

            encoded,

            columns=ohe.get_feature_names_out(
                categorical_cols
            )
        )

        # -----------------------------------------
        # DROP ORIGINAL CAT COLS
        # -----------------------------------------

        input_df = input_df.drop(
            columns=categorical_cols
        )

        # -----------------------------------------
        # CONCAT ENCODED
        # -----------------------------------------

        input_df = pd.concat(
            [input_df, encoded_df],
            axis=1
        )

        # -----------------------------------------
        # ALIGN FEATURES
        # -----------------------------------------

        model_features = model.feature_names_in_

        input_df = input_df.reindex(

            columns=model_features,

            fill_value=0
        )

        # -----------------------------------------
        # ML PROBABILITY
        # -----------------------------------------

        ml_probability = (

            model.predict_proba(input_df)[0][1]
        ) * 100

        # -----------------------------------------
        # FINAL HYBRID SCORE
        # -----------------------------------------

        final_probability = (

            0.5 * statistical_probability +

            0.5 * ml_probability
        )

        # -----------------------------------------
        # STATUS
        # -----------------------------------------

        status = classify(
            final_probability
        )

        # -----------------------------------------
        # SAVE RESULTS
        # -----------------------------------------

        results.append({

            "Branch":
                row["Branch"],

            "StatisticalProb":
                round(
                    statistical_probability,
                    2
                ),

            "MLProb":
                round(
                    ml_probability,
                    2
                ),

            "FinalProbability":
                round(
                    final_probability,
                    2
                ),

            "FutureClosingRank":
                int(
                    future_closing_rank
                ),

            "FuturePercentile":
                round(
                    future_percentile,
                    5
                ),

            "RankGap":
                int(
                    rank_gap
                ),

            "Status":
                status
        })

    # ---------------------------------------------
    # FINAL DATAFRAME
    # ---------------------------------------------

    results_df = pd.DataFrame(results)

    # ---------------------------------------------
    # SORT
    # ---------------------------------------------

    results_df = results_df.sort_values(

        by="FinalProbability",

        ascending=False
    )

    # ---------------------------------------------
    # RETURN
    # ---------------------------------------------

    return results_df.to_dict(
        orient="records"
    )