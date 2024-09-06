const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        // validate token
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = authMiddleware;
