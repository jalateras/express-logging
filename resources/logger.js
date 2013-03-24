var log4js = require('log4js');
var util = require('util');


exports.getGlobalLogger = function(req, res) {
    res.send(200, log4js);
};

exports.setGlobalLogLevel = function(req, res) {
    var logLevel = req.params.logLevel;
    if (logLevel) {
        log4js.setGlobalLogLevel(logLevel);
    }
    res.send(200);
};

exports.getCategoryLogger = function(req, res) {
    var category = req.params.category;
    res.send(200, log4js.getLogger(category));
};

exports.setCategoryLogLevel = function(req, res) {
    var category = req.params.category;
    var logLevel = req.params.logLevel;
    if (category && logLevel) {
        log4js.getLogger(category).setLevel(logLevel);
    }
    res.send(200);
};

