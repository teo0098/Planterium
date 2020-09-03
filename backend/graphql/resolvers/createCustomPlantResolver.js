const isAuth = require('../../middlewares/isAuth');
const { PLANT_EXISTS } = require('../../ERRORS');
const generateTokens = require('../../middlewares/generateTokens');
const generateDate = require('../../middlewares/generateDate');
const User = require('../../models/user');
const generatePercentages = require('../../middlewares/generatePercentages');
const validateData = require('../../middlewares/validateData');

const createCustomPlantResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error();
        const plantExists = user.garden.find(({ name }) => name === args.name);
        if (plantExists) throw new Error(PLANT_EXISTS);
        if (!validateData(args)) throw new Error();
        const newPlant = {
            ...args,
            watered: generateDate(),
            irrigation: Date.now()
        }
        user.garden.unshift(newPlant);
        await User.findOneAndUpdate({ nickname: user.nickname }, { garden: user.garden }, { new: true, useFindAndModify: false });
        generateTokens(res, user.nickname);
        newPlant.irrigation = generatePercentages(newPlant.irrigation, newPlant.watering);
        return newPlant;
    }
    catch({ message }) {
        if (message === PLANT_EXISTS) throw new Error(message);
        throw new Error();
    }
}

module.exports = createCustomPlantResolver;