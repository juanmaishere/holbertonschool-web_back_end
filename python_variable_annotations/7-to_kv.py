#!/usr/bin/env python3
"""sum list FUNCTION WIH ANOTATIONS"""
from typing import Tuple, Union

def to_kv(kv_pair: Tuple[str, Union[int, float]]) -> Tuple[str, float]:
    """Converts key-value pair into a tuple with key and its square value."""
    k, v = kv_pair
    v = v ** 2
    return k, v