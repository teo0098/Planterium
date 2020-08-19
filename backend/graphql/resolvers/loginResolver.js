const { compare } = require('bcrypt');

const User = require('../../models/user');
const generateTokens = require('../../generateTokens');
const { WRONG_CREDENTIALS } = require('../../ERRORS');

const loginResolver = async (_, { login, password }, { res }) => {
    try {
        let user = await User.findOne({ nickname: login });
        if (!user) {
            user = await User.findOne({ email: login });
            if (!user) throw new Error(WRONG_CREDENTIALS);
        }
        const comparePass = await compare(password, user.password);
        if (!comparePass) throw new Error(WRONG_CREDENTIALS);
        generateTokens(res, user.nickname);
        return true;
    }
    catch ({ message }) {
        if (message === WRONG_CREDENTIALS) throw new Error(message);
        throw new Error();
    }
}

module.exports = loginResolver;