const { verify } = require('jsonwebtoken');

const User = require('../../models/user');
const generateTokens = require('../../generateTokens');

const isAuthResolver = async (_, __, { req, res }) => {
    
    let authenticated = true, user;

    try {
        const { nickname } = verify(req.cookies['access-token'], process.env.JWT_ACCESS_TOKEN);
        user = await User.findOne({ nickname });
        if (!user) throw new Error();
    }
    catch {
        authenticated = false;
    }

    if (!authenticated) {
        try {
            const { nickname } = verify(req.cookies['refresh-token'], process.env.JWT_REFRESH_TOKEN);
            user = await User.findOne({ nickname });
            if (!user) throw new Error();
            authenticated = true;
        }
        catch {
            authenticated = false;
        }
    }

    if (authenticated) {
        generateTokens(res, user.nickname);
        return true;
    }

    return false;
}

module.exports = isAuthResolver;