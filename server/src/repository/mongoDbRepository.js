const { getDB } = require('../config/connect');
const ObjectId = require('mongodb').ObjectId;

class MongoDbRepo {
  constructor(collectionName) {
    this.collection = getDB().collection(collectionName);
  }

  async getAll() {
    const cursor = await this.collection.find({});
    const allValues = await cursor.toArray();
    return allValues;
  }

  async create(doc) {
    const result = await this.collection.insertOne(doc);
    return { _id: result.insertedId, ...doc };
  }

  async updateById(_id, doc) {
    const filter = { _id: ObjectId(_id) };
    const updateDoc = {
      $set: {
        ...doc,
      },
    };
    const options = {
      returnDocument: 'after',
    };
    const result = await this.collection.findOneAndUpdate(
      filter,
      updateDoc,
      options
    );
    return { ...result.value };
  }
}

module.exports = MongoDbRepo;
