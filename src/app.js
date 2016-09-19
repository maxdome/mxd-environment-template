const { app, checkhelper, config, express, healthcheck, info, logging, silentLogging }
  = require('mxd-environment')();

// example route

app.get('/', (req, res) => {
  res.send('Hello World!');
});
