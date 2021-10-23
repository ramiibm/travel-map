const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Define the Travel Input (first itteration)
const travelInput = new GraphQLInputObjectType({
  name: 'TravelInput',
  fields: {
    city: { type: GraphQLString },
    rating: { type: GraphQLInt },
  },
});

module.exports = { travelInput };
