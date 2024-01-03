#!/usr/bin/env python3
"""Async co-routine"""
import asyncio
import random
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    lists = []
    for _ in range(0, n):
        delay = await wait_random(max_delay)
        lists.append(delay)
    sorted(lists)
    return lists
