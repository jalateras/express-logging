/**
 * @author       Jim Alateras
 */
var logger = require('./logger');

module.exports = function(app) {
    // logger resouce
    app.get('/logger', logger.getGlobalLogger);
    app.put('/logger/:logLevel', logger.setGlobalLogLevel);
    app.get('/logger/:category', logger.getCategoryLogger);
    app.put('/logger/:category/:logLevel',logger.setCategoryLogLevel);
}