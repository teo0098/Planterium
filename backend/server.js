const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

require('./dbconnection');
const rootQuery = require('./graphql/rootQuery');
const mutation = require('./graphql/mutation');

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation
});

const server = express();

server.use(cookieParser());

server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

server.use('/graphql', expressGraphQL((req, res) => ({
    schema,
    graphiql: process.env.NODE_ENV !== 'production' ? true : false,
    context: { req, res }
})));

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, "../build")));

    server.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, "../build/index.html"));
    });
}

server.listen(process.env.PORT || 5000, () => console.log('Server is running...'));