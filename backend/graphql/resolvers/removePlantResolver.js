const isAuth = require('../../middlewares/isAuth');
const generateTokens = require('../../middlewares/generateTokens');
const User = require('../../models/user');

const removePlantResolver = async (_, args, { req: { cookies }, res }) => {
    try {
        const user = await isAuth(cookies);
        if (!user) throw new Error();
        user.garden = user.garden.filter(({ name }) => name !== args.name);
        await User.findOneAndUpdate({ nickname: user.nickname }, { garden: user.garden }, { new: true, useFindAndModify: false });
        generateTokens(res, user.nickname);
        return true;
    }
    catch {
        throw new Error();
    }
}

module.exports = removePlantResolver;