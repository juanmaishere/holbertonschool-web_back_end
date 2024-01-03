#!/usr/bin/env python3
"""Async co-routine"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """ Wait a random time """
    time = random.uniform(0, max_delay)
    await asyncio.sleep(time)
    return time
