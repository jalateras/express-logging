/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , log4js = require('log4js');

var app = express();

var logger = log4js.getLogger('express');
logger.setLevel('WARN');
log4js.setGlobalLogLevel('WARN');

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

// hook up all the routes
require('./resources/routes')(app);

http.createServer(app).listen(app.get('port'), function () {
    logger.info("Express server listening on port " + app.get('port'));
});


setInterval(function() {
    ['error', 'warn', 'info', 'debug'].forEach(function(logLevel) {
        ['cat1', 'cat2'].forEach(function(category) {
            log4js.getLogger(category)[logLevel]("Hello");
        });
    })
}, 1000);