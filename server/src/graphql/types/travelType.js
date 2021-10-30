const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

// Define the Travel Type
const locationType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    lat: { type: GraphQLFloat },
    lng: { type: GraphQLFloat },
  },
});
const travelType = new GraphQLObjectType({
  name: 'Travel',
  fields: {
    _id: { type: GraphQLID },
    city: { type: GraphQLString },
    rating: { type: GraphQLInt },
    fullCityName: { type: GraphQLString },
    location: { type: locationType },
  },
});

module.exports = { travelType };
