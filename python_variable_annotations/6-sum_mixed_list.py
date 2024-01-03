#!/usr/bin/env python3
"""sum list FUNCTION WIH ANOTATIONS"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Calculate the sum of a list of integers and floats."""
    return sum(mxd_lst)
