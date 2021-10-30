const { GraphQLObjectType, GraphQLID } = require('graphql');
const { travelInput } = require('../types/travelInput');
const { travelType } = require('../types/travelType');
const TravelService = require('../../services/travelService');

// Define the Travel Mutation
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTravel: {
      type: travelType,
      args: {
        input: { type: travelInput },
      },
      resolve: async (_, { input }) => {
        const travelService = new TravelService();
        return await travelService.createTravel({ ...input });
      },
    },
    updateTravel: {
      type: travelType,
      args: {
        _id: { type: GraphQLID },
        input: { type: travelInput },
      },
      resolve: async (_, { _id, input }) => {
        const travelService = new TravelService();
        return await travelService.updateTravel(_id, {
          ...input,
        });
      },
    },
  },
});

module.exports = { mutationType };
