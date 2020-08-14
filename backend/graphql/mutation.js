const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('graphql');

const UserType = require('./types/userType');
const addUserResolver = require('./resolvers/addUserResolver');
const loginResolver = require('./resolvers/loginResolver');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
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
        }
    })
});

module.exports = mutation;