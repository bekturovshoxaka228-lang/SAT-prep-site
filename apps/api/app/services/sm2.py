from datetime import datetime, timedelta, timezone
from typing import Tuple

def calculate_sm2(
    quality: int,
    repetition: int,
    ease_factor: float,
    interval_days: int,
) -> Tuple[int, float, int, datetime]:
    """
    Computes updated SM-2 parameters based on review quality (0-5).
    Returns: (new_repetition, new_ease_factor, new_interval_days, next_review_datetime)
    """
    now = datetime.now(timezone.utc)

    # 1. Update Ease Factor (EF)
    # EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    new_ef = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if new_ef < 1.3:
        new_ef = 1.3

    # 2. Update repetition and interval
    if quality >= 3:
        if repetition == 0:
            new_interval = 1
        elif repetition == 1:
            new_interval = 6
        else:
            new_interval = int(round(interval_days * new_ef))
        new_repetition = repetition + 1
    else:
        new_repetition = 0
        new_interval = 1

    next_review = now + timedelta(days=new_interval)
    return new_repetition, round(new_ef, 2), new_interval, next_review
