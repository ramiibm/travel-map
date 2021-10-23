const { GraphQLObjectType, GraphQLList } = require('graphql');
const { travelType } = require('../types/travelType');
const TravelService = require('../../services/travelService');

const travels = [
  { id: 1446412739542, city: 'Milan', rating: 5 },
  { id: 1446412739543, city: 'Biarritz', rating: 5 },
];

// Define the Travel Query (first itteration)
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    travels: {
      type: GraphQLList(travelType),
      args: {},
      resolve: async () => {
        const travelService = new TravelService();
        return await travelService.getAllTravels();
      },
    },
  },
});

module.exports = { queryType };
