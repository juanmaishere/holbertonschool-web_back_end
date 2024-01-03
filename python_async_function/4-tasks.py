#!/usr/bin/env python3
"""Module"""
from typing import List
task_wait_random = import('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Function to wait n number of times"""
    i = 0
    dic = []
    for i in range(0, n):
        result = await task_wait_random(max_delay)
        dic.append(result)
    return sorted(dic)
