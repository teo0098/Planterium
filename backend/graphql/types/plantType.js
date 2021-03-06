const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const PlantType = new GraphQLObjectType({
    name: 'Plant',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        desc: { type: GraphQLString },
        watering: { type: new GraphQLNonNull(GraphQLInt) },
        light: { type: GraphQLString },
        watered: { type: GraphQLString },
        irrigation: { type: GraphQLString }
    })
});

module.exports = PlantType;