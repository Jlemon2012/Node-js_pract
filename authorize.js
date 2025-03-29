const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name: 'john', id: 3};
        next();
    }
    else {
        res.status(401).send('Unathorized');
    };
}; // usually we check for JSON token and verify that it is correct to give the access to the user

module.exports = authorize;