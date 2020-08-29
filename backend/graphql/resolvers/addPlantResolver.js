const User = require('../../models/user');
const { PLANT_EXISTS, UNAUTHORIZED } = require('../../ERRORS');
const isAuth = require('../../middlewares/isAuth');
const generateTokens = require('../../middlewares/generateTokens');
const generateDate = require('../../middlewares/generateDate');

const addUserResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error(UNAUTHORIZED);
        const plantExists = user.garden.find(({ name }) => name === args.name);
        if (plantExists) throw new Error(PLANT_EXISTS);
        const watered = generateDate();
        const irrigation = Date.now();
        const newPlant = {
            ...args,
            watered,
            irrigation
        }
        user.garden.push(newPlant);
        await User.findOneAndUpdate({ nickname: user.nickname }, { garden: user.garden }, { new: true, useFindAndModify: false });
        generateTokens(res, user.nickname);
        return true;
    }
    catch ({ message }) {
        if (message === PLANT_EXISTS || message === UNAUTHORIZED) throw new Error(message);
        throw new Error();
    }
};

module.exports = addUserResolver;