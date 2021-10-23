const graphql = require('graphql');

// Define the Travel Type (first itteration)
const travelType = graphql.GraphQLObjectType({
  name: 'Travel',
  fields: {
    id: { type: graphql.GraphQLID },
    city: { type: graphql.GraphQLString },
    rating: { type: graphql.GraphQLInt },
  },
});
