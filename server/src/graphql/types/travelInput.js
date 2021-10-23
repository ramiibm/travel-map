const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Define the Travel Type (first itteration)
const travelInput = GraphQLInputObjectType({
  name: 'TravelInput',
  fields: {
    city: { type: GraphQLString },
    rating: { type: GraphQLInt },
  },
});

module.exports = { travelInput };
