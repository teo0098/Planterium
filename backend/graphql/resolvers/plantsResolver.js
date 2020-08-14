const Plant = require('../../models/plant');

const plantsResolver = async (_, { skip, name }) => {
    try {
        if (name === "" || !name) {
            return await Plant.find({}).skip((skip * 5) - 5).limit(5);
        }
        return await Plant.find({ 'name': { '$regex': `${name}`, '$options': 'i' } }).skip((skip * 5) - 5).limit(5);
    }
    catch {
        throw new Error();
    }
}

module.exports = plantsResolver;