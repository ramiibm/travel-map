const { GraphQLSchema } = require('graphql');
const { queryType } = require('./query/travelQuery');

const schema = new GraphQLSchema({ query: queryType });

module.exports = { schema };
