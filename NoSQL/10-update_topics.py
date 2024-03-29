#!/usr/bin/env python3
""" MODULE COMMENT """
import pymongo


def update_topics(mongo_collection, name, topics):
  """ Update a field in the document """
  if mongo_collection:
    mongo_collection.update_many(
      {"name": name},
      {"$set":
        {
        "topics": topics
        }
      }
    )
    return mongo_collection
