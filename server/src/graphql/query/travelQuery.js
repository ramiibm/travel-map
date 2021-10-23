const { GraphQLObjectType } = require('graphql');
const { travelType } = require('../types/travelType');

// Define the Travel Query (first itteration)
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    travel: {
      type: travelType,
      args: {},
      resolve: () => ({
        id: 1446412739542,
        city: 'Biarritz',
        rating: 4,
      }),
    },
  },
});

module.exports = { queryType };
