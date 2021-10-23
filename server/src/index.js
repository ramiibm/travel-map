require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { setupDB } = require('./config/connect');
const { schema } = require('./graphql/schema');

// express server
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
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
  } finally {
    //mongoClient.close();
    //console.log('database connection closed');
  }
};

init();
