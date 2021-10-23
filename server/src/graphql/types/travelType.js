const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

// Define the Travel Type (first itteration)
const travelType = GraphQLObjectType({
  name: 'Travel',
  fields: {
    id: { type: GraphQLID },
    city: { type: GraphQLString },
    rating: { type: GraphQLInt },
  },
});
