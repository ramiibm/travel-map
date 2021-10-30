const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Define the Travel Type (first itteration)
const travelType = new GraphQLObjectType({
  name: 'Travel',
  fields: {
    _id: { type: GraphQLID },
    city: { type: GraphQLString },
    rating: { type: GraphQLInt },
  },
});

module.exports = { travelType };
