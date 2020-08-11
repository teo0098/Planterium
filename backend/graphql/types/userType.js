const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        nickname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
    })
});

module.exports = UserType;