const Plant = require('../../models/plant');

const quantityResolver = async (_, { name }) => {
    try {
        if (name === "" || !name) {
            return await Plant.estimatedDocumentCount();
        }
        return await Plant.find({ 'name': { '$regex': `${name}`, '$options': 'i' } }).countDocuments();
    }
    catch {
        throw new Error();
    }
}

module.exports = quantityResolver;