const User = require('../../models/user');
const { NICKNAME_EXISTS, EMAIL_EXISTS } = require('../../ERRORS');

const addUserResolver = async (_, args) => {
    try {
        const checkNickname = await User.findOne({ nickname: args.nickname });
        if (checkNickname) throw new Error(NICKNAME_EXISTS);
        const checkEmail = await User.findOne({ email: args.email });
        if (checkEmail) throw new Error(EMAIL_EXISTS);
        await new User(args).save();
        return true;
    }
    catch ({ message }) {
        if (message === NICKNAME_EXISTS || message === EMAIL_EXISTS) throw new Error(message);
        throw new Error();
    }
};

module.exports = addUserResolver;