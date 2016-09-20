/* eslint no-unused-vars: "off" */
const { app, checkhelper, config, express, healthcheck, info, logging, silentLogging }
  = require('mxd-environment')();

app.use(require('./middlewares/example')());
app.use(require('./routers/example')(express));
