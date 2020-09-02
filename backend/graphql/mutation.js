const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } = require('graphql');

const addUserResolver = require('./resolvers/addUserResolver');
const loginResolver = require('./resolvers/loginResolver');
const addPlantResolver = require('./resolvers/addPlantResolver');
const logoutResolver = require('./resolvers/logoutResolver');
const waterPlantResolver = require('./resolvers/waterPlantResolver');
const removePlantResolver = require('./resolvers/removePlantResolver');
const createCustomPlantResolver = require('./resolvers/createCustomPlantResolver');
const PlantType = require('../graphql/types/plantType');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: GraphQLBoolean,
            args: {
                nickname: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: addUserResolver
        },
        login: {
            type: GraphQLBoolean,
            args: {
                login: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: loginResolver
        },
        addPlant: {
            type: GraphQLBoolean,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                desc: { type: new GraphQLNonNull(GraphQLString) },
                watering: { type: new GraphQLNonNull(GraphQLInt) },
                light: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: addPlantResolver
        },
        logout: {
            type: GraphQLBoolean,
            resolve: logoutResolver
        },
        removePlant: {
            type: GraphQLBoolean,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: removePlantResolver
        },
        waterPlant: {
            type: GraphQLString,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: waterPlantResolver
        },
        createCustomPlant: {
            type: PlantType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                watering: { type: new GraphQLNonNull(GraphQLInt) },
                desc: { type: GraphQLString },
                light: { type: GraphQLString }
            },
            resolve: createCustomPlantResolver
        }
    })
});

module.exports = mutation;