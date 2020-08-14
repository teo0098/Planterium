const bcrypt = require('bcrypt');

const User = require('../../models/user');
const generateTokens = require('../../generateTokens');

const loginResolver = async (_, { login, password }, { res }) => {
    try {
        let user = await User.findOne({ nickname: login });
        if (!user) {
            user = await User.findOne({ email: login });
            if (!user) throw new Error('WRONG CREDENTIALS');
        }
        const comparePass = await bcrypt.compare(password, user.password);
        if (!comparePass) throw new Error('WRONG CREDENTIALS');
        generateTokens(res, user.nickname);
        return true;
    }
    catch (e) {
        if (e.message === 'WRONG CREDENTIALS') throw new Error(e.message);
        throw new Error();
    }
}

module.exports = loginResolver;