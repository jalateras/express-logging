# express-logging
Demos log4js integrated with express and a REST endpoint


## Install
Once you have cloned the repository change to the directory

    npm install

## Start
To start the express server

    npm start

You will start seeing logging for 2 categories 'cat1' and 'cat2' across several log levels (i.e info, debug etc). I have
also configured express to use log4js using the 'express' category.

## Logging REST API
To turn the global log level to WARN

    curl -X PUT http://localhost:3000/logger/WARN

To turn the global log level completely off

    curl -X PUT http://localhost:3000/logger/OFF

To set the log level of express to DEBUG

    curl -X PUT http://localhost:3000/logger/express/DEBUG

To set the log level of cat1 to OFF

    curl -X PUT http://localhost:3000/logger/cat1/OFF

## Links

* [log4js-node](https://github.com/nomiddlename/log4js-node)









