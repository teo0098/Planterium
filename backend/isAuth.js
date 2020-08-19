const { verify } = require('jsonwebtoken');

const User = require('./models/user');

const isAuth = async (cookies) => {
    let authenticated = true, user;

    try {
        const { nickname } = verify(cookies['access-token'], process.env.JWT_ACCESS_TOKEN);
        user = await User.findOne({ nickname });
        if (!user) throw new Error();
    }
    catch {
        authenticated = false;
    }

    if (!authenticated) {
        try {
            const { nickname } = verify(cookies['refresh-token'], process.env.JWT_REFRESH_TOKEN);
            user = await User.findOne({ nickname });
            if (!user) throw new Error();
            authenticated = true;
        }
        catch {
            authenticated = false;
        }
    }

    if (authenticated) return user;

    return false;
}

module.exports = isAuth;