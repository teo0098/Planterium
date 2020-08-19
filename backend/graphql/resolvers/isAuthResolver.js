const isAuth = require('../../isAuth');
const generateTokens = require('../../generateTokens');

const isAuthResolver = async (_, __, { req: { cookies }, res }) => {
    const user = await isAuth(cookies);
    if (!user) return false; 
    generateTokens(res, user.nickname);
    return true;
}

module.exports = isAuthResolver;