const jwt = require('jsonwebtoken');

function ensureAuthenticated(req, res, next) {
    let receivedToken;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        receivedToken = req.headers.authorization.split(' ')[1];
    }

    if (receivedToken) {
        jwt.verify(receivedToken, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                next(err);
            } else {
                console.log(decoded);
                
                next();
            }
        })
    } else {
        return res.status(401).json({message: 'Must pass token'});
    }
}

module.exports = ensureAuthenticated;
