/* eslint no-unused-vars: "off" */
const { app, checkhelper, config, express, healthcheck, info, logging, silentLogging }
  = require('mxd-environment')();
require('mxd-swagger')(app, express);

app.use(require('./middlewares/example')());
app.use('/api/v1', require('./routers/api')(express));

app.get('/', (req, res) => {
  res.redirect('/docs/v1#/default');
});
