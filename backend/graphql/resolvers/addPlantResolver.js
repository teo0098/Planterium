const User = require('../../models/user');
const { PLANT_EXISTS, UNAUTHORIZED } = require('../../ERRORS');
const isAuth = require('../../middlewares/isAuth');
const generateTokens = require('../../middlewares/generateTokens');

const addUserResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error(UNAUTHORIZED);
        const plantExists = user.garden.find(({ name }) => name === args.name);
        if (plantExists) throw new Error(PLANT_EXISTS);
        const date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const year = date.getFullYear();
        const watered = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
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