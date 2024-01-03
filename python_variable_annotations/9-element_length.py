#!/usr/bin/env python3
"""sum list FUNCTION WIH ANOTATIONS"""
from typing import Tuple, Union, Sequence, Iterable, List

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Iterable sequence typing annotations """
    return [(i, len(i)) for i in lst]