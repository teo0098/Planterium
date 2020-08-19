const User = require('../../models/user');

const userPlantsResolver = async (_, { skip, name, nickname }, { req }) => {
    try {
        if (name === "" || !name) {
            const user = await User.findOne({ nickname });
            if (!user) throw new Error();
            return user.garden;
        }
       
    }
    catch {
        throw new Error();
    }
}

module.exports = userPlantsResolver;