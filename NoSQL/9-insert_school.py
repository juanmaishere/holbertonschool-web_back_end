#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo

def insert_school(mongo_collection, **kwargs):
    """ Insert NEW DOCUMENT into mongodb collection """
    if mongo_collection:
        for key, value in kwargs.items():
            result = mongo_collection.insert_one({key: value})
            try:
                inserted_id = result.inserted_id
            except Exceptions:
                pass
        return inserted_id
    else:
        return
