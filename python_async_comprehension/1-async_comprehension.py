#!/usr/bin/env python3
""" Module """
async_generator = __import__('0-async_generator').async_generator


async def print_yielded_values():
    """ Print yielded results from async generator"""
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)
