const Plant = require('../../models/plant');
const isAuth = require('../../middlewares/isAuth');

const quantityResolver = async (_, args, { req: { cookies } }) => {
    try {
        if (args.user === "" || !args.user) {
            if (args.name === "" || !args.name) return await Plant.estimatedDocumentCount();
            return await Plant.find({ 'name': { '$regex': `${args.name}`, '$options': 'i' } }).countDocuments();
        }
        else {
            const user = await isAuth(cookies);
            if (!user) throw new Error();
            if (args.name === "" || !args.name) return user.garden.length;
            return user.garden.filter(({ name }) => name.toLowerCase().includes(args.name)).length;
        }
    }
    catch {
        throw new Error();
    }
}

module.exports = quantityResolver;