#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo


def update_topics(mongo_collection, name, topics):
  if mongo_collection:
    lista = list(topics)
    mongo_collection.update_many({topics: lista})
