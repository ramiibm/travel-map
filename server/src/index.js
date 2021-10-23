require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { setupDB } = require('./config/connect');

//GraphQL components
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);
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
  // connect to mongodb
  await setupDB().catch(console.dir);

  // launch server
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
};

init();
