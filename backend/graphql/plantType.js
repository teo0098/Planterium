const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PlantType = new GraphQLObjectType({
    name: 'Plant',
    fields: () => ({
        name: { type: GraphQLString },
        desc: { type: GraphQLString },
        watering: { type: GraphQLInt },
        light: { type: GraphQLString }
    })
});

module.exports = PlantType;