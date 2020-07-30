const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const cors = require('cors');

const rootQuery = require('./graphql/rootQuery');

const schema = new GraphQLSchema({
    query: rootQuery
});

const app = express();

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || 5000, () => console.log('Server is running...'));