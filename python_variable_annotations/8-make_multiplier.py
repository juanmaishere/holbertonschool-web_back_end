#!/usr/bin/env python3
"""sum list FUNCTION WIH ANOTATIONS"""
from typing import Tuple, Union, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Function that returns callable function"""


    def multiplier_function(x: float) -> float:
        """Inner function that performs the multiplication."""
        return x * multiplier

    return multiplier_function
