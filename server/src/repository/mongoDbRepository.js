const { getDB } = require('../config/connect');

class MongoDbRepo {
  constructor(collectionName) {
    this.collection = getDB().collection(collectionName);
  }
  async getAll() {
    const cursor = await this.collection.find({});

    const allValues = await cursor.toArray();
    console.log('allValues', allValues);
    return allValues;
  }
}

module.exports = MongoDbRepo;
