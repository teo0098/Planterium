const logoutResolver = (_, __, { res }) => {
    res.cookie('access-token', '', {
        httpOnly: true,
        secure: false,
        maxAge: 0
    });
    res.cookie('refresh-token', '', {
        httpOnly: true,
        secure: false,
        maxAge: 0
    });
    res.cookie('user', '', {
        secure: false,
        maxAge: 0
    });
    return true;
}

module.exports = logoutResolver;