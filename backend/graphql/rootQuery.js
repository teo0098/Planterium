const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const PlantType = require('./types/plantType');
const plantsResolver = require('./resolvers/plantsResolver');
const quantityResolver = require('./resolvers/quantityResolver');
const isAuthResolver = require('./resolvers/isAuthResolver');

const rootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            args: {
                skip: { type: new GraphQLNonNull(GraphQLInt) },
                name : { type: GraphQLString }
            },
            resolve: plantsResolver
        },
        quantity: {
            type: GraphQLInt,
            args: {
                name : { type: GraphQLString }
            },
            resolve: quantityResolver
        },
        isAuth: {
            type: GraphQLBoolean,
            resolve: isAuthResolver
        }
    })
});

module.exports = rootQuery;