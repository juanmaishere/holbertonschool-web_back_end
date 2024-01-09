#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo

def list_all(mongo_collection):
  """ Returns a list of all colecction """
  if mongo_collection:
    return list(mongo_collection.find())
  else:
    return []
