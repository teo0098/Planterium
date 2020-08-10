const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

const PlantType = require('./types/plantType');
const Plant = require('../models/plant');

const rootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            args: {
                skip: { type: GraphQLInt },
                name : { type: GraphQLString }
            },
            resolve: async (parentValue, args) => {
                if (args.name === undefined || args.name === "" || !args.name) {
                    return await Plant.find({}).skip((args.skip * 5) - 5).limit(5);
                }
                return await Plant.find({ 'name': { '$regex': `${args.name}`, '$options': 'i' } }).skip((args.skip * 5) - 5).limit(5);
            }
        },
        quantity: {
            type: GraphQLInt,
            args: {
                name : { type: GraphQLString }
            },
            resolve: async (parentValue, args) => {
                if (args.name === undefined || args.name === "" || !args.name) {
                    return await Plant.estimatedDocumentCount();
                }
                return await Plant.find({ 'name': { '$regex': `${args.name}`, '$options': 'i' } }).countDocuments();
            }
        }
    })
});

module.exports = rootQuery;