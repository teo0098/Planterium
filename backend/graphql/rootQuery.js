const { GraphQLList, GraphQLObjectType } = require('graphql');
const { connect } = require('mongoose');

const PlantType = require('./plantType');
const Plant = require('../models/plant');

const rootQuery = new GraphQLObjectType({
    name: 'Plants',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            resolve: async () => {
                await connect(process.env.PLANTS_DB_CONNECTION, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                });
                const plants = await Plant.find({});
                return plants;
            }
        }
    })
});

module.exports = rootQuery;