const { connect } = require('mongoose');

connect(process.env.PLANTS_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})