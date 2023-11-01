
const setCustomCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, Content-Type, X-Auth-Token, If-Match')
    res.set('Cache-Control', 'no-store')

    next()
};

module.exports = {
    setCustomCors
}