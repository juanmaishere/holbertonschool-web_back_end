#!/usr/bin/env python3
"""Async co-routine"""
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def tasks_wait_n(n: int, max_delay: int) -> List[float]:
    """ Wait n times and return a list of delays"""
    lists = []
    for _ in range(0, n):
        delay = await task_wait_random(max_delay)
        lists.append(delay)
    sorted(lists)
    return lists
