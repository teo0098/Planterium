const User = require('../../models/user');

const addUserResolver = async (_, args) => {
    try {
        const checkNickname = await User.findOne({ nickname: args.nickname });
        if (checkNickname) throw new Error('NICKNAME EXISTS');
        const checkEmail = await User.findOne({ email: args.email });
        if (checkEmail) throw new Error('EMAIL EXISTS');
        return await new User(args).save();
    }
    catch (e) {
        if (e.message === 'NICKNAME EXISTS' || e.message === 'EMAIL EXISTS') throw new Error(e.message);
        throw new Error();
    }
};

module.exports = addUserResolver;