const { GraphQLSchema } = require('graphql');
const { queryType } = require('./query/travelQuery');
const { mutationType } = require('./mutation/travelMutation');

const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

module.exports = { schema };
