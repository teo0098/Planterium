const isAuth = require('../../middlewares/isAuth');
const generateTokens = require('../../middlewares/generateTokens');
const generateDate = require('../../middlewares/generateDate');
const User = require('../../models/user');

const waterPlantResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error();
        const plant = user.garden.find(({ name }) => name === args.name);
        if (!plant) throw new Error();
        plant.watered = generateDate();
        plant.irrigation = Date.now();
        const plantIndex = user.garden.findIndex(({ name }) => name === args.name);
        user.garden[plantIndex] = plant;
        await User.findOneAndUpdate({ nickname: user.nickname }, { garden: user.garden }, { new: true, useFindAndModify: false });
        generateTokens(res, user.nickname);
        return true;
    }
    catch {
        throw new Error();
    }
}

module.exports = waterPlantResolver;