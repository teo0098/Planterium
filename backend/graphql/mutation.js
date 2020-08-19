const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } = require('graphql');

const addUserResolver = require('./resolvers/addUserResolver');
const loginResolver = require('./resolvers/loginResolver');
const addPlantResolver = require('./resolvers/addPlantResolver');

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
        }
    })
});

module.exports = mutation;