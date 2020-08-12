const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const UserType = require('./types/userType');
const User = require('../models/user');

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
            resolve: async (parentValue, args) => {
                try {
                    const checkNickname = await User.findOne({ nickname: args.nickname });
                    const checkEmail = await User.findOne({ email: args.email });
                    if (checkNickname) throw new Error('NICKNAME EXISTS');
                    if (checkEmail) throw new Error('EMAIL EXISTS');
                    return await new User(args).save();
                }
                catch (e) {
                    if (e.message === 'NICKNAME EXISTS' || e.message === 'EMAIL EXISTS') throw new Error(e.message);
                    throw new Error();
                }
            }
        }
    })
});

module.exports = mutation;