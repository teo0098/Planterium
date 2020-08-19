const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const PlantType = new GraphQLObjectType({
    name: 'UserPlant',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        desc: { type: new GraphQLNonNull(GraphQLString) },
        watering: { type: new GraphQLNonNull(GraphQLInt) },
        light: { type: new GraphQLNonNull(GraphQLString) }
    })
});

module.exports = PlantType;