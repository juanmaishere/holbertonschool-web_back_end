#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo

def insert_school(mongo_collection, **kwargs):
    if mongo_collection:
        for key, value in kwargs.items():
            mongo_collection.insert_one({key: value})
    else:
        return
