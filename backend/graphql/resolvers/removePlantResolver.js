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
        if (args.skip * 5 < args.quantity) {
            if (args.searchName === '' || !args.searchName) return user.garden[args.skip * 5 - 1];
            return user.garden.filter(({ name }) => name.toLowerCase().includes(args.name))[args.skip * 5 - 1]
        }
        return null;
    }
    catch {
        throw new Error();
    }
}

module.exports = removePlantResolver;