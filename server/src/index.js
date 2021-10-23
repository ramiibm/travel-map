require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { setupDB, getDB } = require('./config/connect');
const { schema } = require('./graphql/schema');

//GraphQL components
const root = {
  hello: () => 'Hello World',
};

// express server
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const init = async () => {
  let mongoClient;
  try {
    // connect to mongodb
    mongoClient = await setupDB().catch(console.dir);

    // launch server
    app.listen(4000);
    console.log(
      'Running a GraphQL API server at http://localhost:4000/graphql'
    );

    const mongoDb = await getDB();
  } finally {
    //mongoClient.close();
    //console.log('database connection closed');
  }
};

init();
