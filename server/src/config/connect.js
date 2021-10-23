const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@travel-map.vot2f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(url);
let mongodb;

const setupDB = async function () {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    return client;
  } catch (err) {
    console.log(err.stack);
  }
};

const getDB = () => client.db(process.env.DB_NAME);

module.exports = { setupDB, getDB };
