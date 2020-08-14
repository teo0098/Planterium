const { sign } = require('jsonwebtoken');

const generateTokens = (res, nickname) => {
    const accessToken = sign({ nickname }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '10m' });
    const refreshToken = sign({ nickname }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '7d' });
    res.cookie('access-token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 60 / 6 // 10 min
    });
    res.cookie('refresh-token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    });
    res.cookie('user-logged', true, {
        secure: process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    });
}

module.exports = generateTokens;