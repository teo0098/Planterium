const isAuth = require('../../middlewares/isAuth');
const generateTokens = require('../../middlewares/generateTokens');
const User = require('../../models/user');

const waterPlantResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error();
        const plant = user.garden.find(({ name }) => name === args.name);
        if (!plant) throw new Error();
        plant.watered = args.lastWatered;
        plant.irrigation = Date.now();
        const plantIndex = user.garden.findIndex(({ name }) => name === args.name);
        if (plantIndex === -1) throw new Error();
        user.garden[plantIndex] = plant;
        await User.findOneAndUpdate({ nickname: user.nickname }, { garden: user.garden }, { new: true, useFindAndModify: false });
        generateTokens(res, user.nickname);
        return plant.watered;
    }
    catch {
        throw new Error();
    }
}

module.exports = waterPlantResolver;