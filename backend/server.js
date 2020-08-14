const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./dbconnection');
const rootQuery = require('./graphql/rootQuery');
const mutation = require('./graphql/mutation');

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation
});

const app = express();

app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use('/graphql', expressGraphQL((req, res) => ({
    schema,
    graphiql: process.env.NODE_ENV !== 'production' ? true : false,
    context: { req, res }
})));

app.listen(process.env.PORT || 5000, () => console.log('Server is running...'));