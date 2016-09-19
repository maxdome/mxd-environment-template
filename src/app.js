// set up the app config with the all.json and development.json

const config = Object.assign({}, require('../config/all.json'));
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  try {
    const developmentConfig = require('../config/development.json');
    Object.assign(config, developmentConfig);
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      throw err;
    }
  }
}

// initialize the environment

const environment = require('mxd-environment')(config);

// initialize the express app

const appLogger = environment.logging('app');
const app = require('express')();

// initialize the environment services "ping", "info" and "healthcheck"

environment.ping(app);
environment.info(app);
const healthcheck = environment.healthcheck;
healthcheck.healthcheck(app);

// example route

app.get('/', (req, res) => {
  appLogger.info(`received request to '/' from ${req.connection.remoteAddress}`);
  res.send('Hello World!');
});

// initialize the app listen for the configured port

app.listen(config.port, () => {
  appLogger.info(`${process.pid} listening on ${config.port}`);
});
