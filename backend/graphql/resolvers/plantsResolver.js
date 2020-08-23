const Plant = require('../../models/plant');
const isAuth = require('../../middlewares/isAuth');

const plantsResolver = async (_, args, { req: { cookies } }) => {
    try {
        if (args.user === "" || !args.user) {
            if (args.name === "" || !args.name) {
                return await Plant.find({}).skip((args.skip * 5) - 5).limit(5);
            }
            return await Plant.find({ 'name': { '$regex': `${args.name}`, '$options': 'i' } }).skip((args.skip * 5) - 5).limit(5);
        }
        else {
            const user = await isAuth(cookies);
            if (!user) throw new Error();
            user.garden = user.garden.map(plant => {
                let hours = Date.now() - Number(plant.irrigation);
                hours = Math.round(hours / 1000 / 60 / 60);
                let percentage = Number(hours) / Number(plant.watering) * 100;
                if (percentage >= 100) percentage = 0;
                else percentage = 100 - percentage;
                plant.irrigation = percentage.toFixed(2).toString();
                return plant;
            });
            if (args.name === "" || !args.name) {
                return user.garden.slice((args.skip * 5) - 5, args.skip * 5);
            }
            return user.garden.filter(({ name }) => name.toLowerCase().includes(args.name)).slice((args.skip * 5) - 5, args.skip * 5);
        }
    }
    catch {
        throw new Error();
    }
}

module.exports = plantsResolver;