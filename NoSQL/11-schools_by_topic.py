#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo

def schools_by_topic(mongo_collection, topic):
    """ Retrieve school topics"""
    if mongo_collection:
        mongo_collection.find({"topics": topic})
        return mongo_collection
