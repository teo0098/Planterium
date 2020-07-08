const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const axios = require('axios');

const PlantType = new GraphQLObjectType({
    name: 'Plant',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        scientific_name: {
            type: GraphQLString
        }
    })
});

const rootQuery = new GraphQLObjectType({
    name: 'Plants',
    fields: () => ({
        plants: {
            type: new GraphQLList(PlantType),
            resolve: async () => {
                const plants = await axios.get(`https://trefle.io/api/plants?token=${process.env.PLANTS_SECRET_KEY}`);
                return plants.data;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: rootQuery
});

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(5000, () => console.log('Server is running...'));