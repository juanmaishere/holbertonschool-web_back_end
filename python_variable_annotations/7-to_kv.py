#!/usr/bin/env python3
"""sum list FUNCTION WIH ANOTATIONS"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Converts key-value pair into a tuple with key and its square value."""
    return k, v ** 2
