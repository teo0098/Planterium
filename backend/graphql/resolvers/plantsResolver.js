const Plant = require('../../models/plant');
const isAuth = require('../../middlewares/isAuth');
const generatePercentages = require('../../middlewares/generatePercentages');

const plantsResolver = async (_, args, { req: { cookies } }) => {
    try {
        if (args.user === "" || !args.user) {
            if (args.name === "" || !args.name) return await Plant.find({}).skip((args.skip * 5) - 5).limit(5);
            return await Plant.find({ 'name': { '$regex': `${args.name}`, '$options': 'i' } }).skip((args.skip * 5) - 5).limit(5);
        }
        else {
            const user = await isAuth(cookies);
            if (!user) throw new Error();
            user.garden = user.garden.map(plant => {
                plant.irrigation = generatePercentages(plant.irrigation, plant.watering);
                return plant;
            });
            if (args.name === "" || !args.name) return user.garden.slice((args.skip * 5) - 5, args.skip * 5);
            return user.garden.filter(({ name }) => name.toLowerCase().includes(args.name)).slice((args.skip * 5) - 5, args.skip * 5);
        }
    }
    catch {
        throw new Error();
    }
}

module.exports = plantsResolver;