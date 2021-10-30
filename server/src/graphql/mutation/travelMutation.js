const { GraphQLObjectType, GraphQLID } = require('graphql');
const { travelInput } = require('../types/travelInput');
const { travelType } = require('../types/travelType');
const TravelService = require('../../services/travelService');

const travels = [
  { id: 1446412739542, city: 'Milan', rating: 5 },
  { id: 1446412739543, city: 'Biarritz', rating: 5 },
];
// Create a new travel
const createTravel = async ({ input }) => {};

// Update an existing travel
const updateTravel = (id, { input }) => {};

// Define the Travel Query (first itteration)
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
