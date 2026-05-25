import math


# ---------------------------------------------------
# FUTURE PERCENTILE ESTIMATION
# ---------------------------------------------------

def estimate_future_percentile(

    historical_percentile,
    trend,

    historical_branch_seats,
    future_branch_seats,

    historical_candidates,
    future_candidates
):

    # -----------------------------------------
    # SEAT ADJUSTMENT
    # -----------------------------------------

    seat_ratio = (

        future_branch_seats /

        historical_branch_seats
    )

    seat_adjustment = (

        -0.02 *

        math.log(seat_ratio)
    )

    # -----------------------------------------
    # COMPETITION ADJUSTMENT
    # -----------------------------------------

    candidate_ratio = (

        future_candidates /

        historical_candidates
    )

    competition_adjustment = (

        -0.015 *

        math.log(candidate_ratio)
    )

    # -----------------------------------------
    # FINAL FUTURE PERCENTILE
    # -----------------------------------------

    future_percentile = (

        historical_percentile +

        trend +

        seat_adjustment +

        competition_adjustment
    )

    # -----------------------------------------
    # CLIPPING
    # -----------------------------------------

    future_percentile = max(

        0.0,

        min(future_percentile, 0.9999)
    )

    return future_percentile


# ---------------------------------------------------
# FUTURE CLOSING RANK
# ---------------------------------------------------

def estimate_future_closing_rank(

    future_percentile,
    future_candidates
):

    closing_rank = (

        (1 - future_percentile)

        * future_candidates
    )

    return int(closing_rank)