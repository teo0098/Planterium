const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } = require('graphql');

const PlantType = require('./types/plantType');
const Plant = require('../models/plant');

const rootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            args: {
                skip: { type: new GraphQLNonNull(GraphQLInt) },
                name : { type: GraphQLString }
            },
            resolve: async (parentValue, { skip, name }) => {
                try {
                    if (name === "" || !name) {
                        return await Plant.find({}).skip((skip * 5) - 5).limit(5);
                    }
                    return await Plant.find({ 'name': { '$regex': `${name}`, '$options': 'i' } }).skip((skip * 5) - 5).limit(5);
                }
                catch (e) {
                    throw new Error();
                }
            }
        },
        quantity: {
            type: GraphQLInt,
            args: {
                name : { type: GraphQLString }
            },
            resolve: async (parentValue, { name }) => {
                try {
                    if (name === "" || !name) {
                        return await Plant.estimatedDocumentCount();
                    }
                    return await Plant.find({ 'name': { '$regex': `${name}`, '$options': 'i' } }).countDocuments();
                }
                catch (e) {
                    throw new Error();
                }
            }
        }
    })
});

module.exports = rootQuery;