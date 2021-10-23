const { GraphQLObjectType } = require('graphql');
const { travelType } = require('../types/travelType');

const travels = [
  { id: 1446412739542, city: 'Milan', rating: 5 },
  { id: 1446412739543, city: 'Biarritz', rating: 5 },
];

// Define the Travel Query (first itteration)
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    travel: {
      type: travelType,
      args: {},
      resolve: () => travels[0],
    },
  },
});

module.exports = { queryType };
