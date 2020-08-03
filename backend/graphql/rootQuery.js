const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');
const { connect } = require('mongoose');

const PlantType = require('./plantType');
const Plant = require('../models/plant');

const rootQuery = new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            args: {
                skip: { type: GraphQLInt }
            },
            resolve: async (parentValue, args) => {
                await connect(process.env.PLANTS_DB_CONNECTION, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                });
                return await Plant.find({}).skip((args.skip * 5) - 5).limit(5);
            }
        },
        quantity: {
            type: GraphQLInt,
            resolve: async () => await Plant.estimatedDocumentCount()
        }
    })
});

module.exports = rootQuery;