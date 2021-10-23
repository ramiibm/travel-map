const { GraphQLObjectType } = require('graphql');
const { travelInput } = require('../types/travelInput');
const { travelType } = require('../types/travelType');

const travels = [
  { id: 1446412739542, city: 'Milan', rating: 5 },
  { id: 1446412739543, city: 'Biarritz', rating: 5 },
];

// Create a new travel
const createTravel = ({ input }) => {
  // Create a random id for our "database".
  const id = require('crypto').randomBytes(10).toString('hex');
  const newTravel = { id, ...input };
  travels.push(newTravel);
  console.log('travels', travels);
  return newTravel;
};

// Define the Travel Query (first itteration)
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTravel: {
      type: travelType,
      args: {
        input: { type: travelInput },
      },
      resolve: (_, { input }) => {
        return createTravel({ input });
      },
    },
  },
});

module.exports = { mutationType };
