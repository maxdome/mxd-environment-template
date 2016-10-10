/* eslint no-unused-vars: "off" */
const environment = require('mxd-environment')();

const app = environment.app;
const express = environment.express;

require('mxd-swagger')(app, express);

app.use(require('./middlewares/example')());
app.use('/api/v1', require('./routers/api')(express));

app.get('/', (req, res) => {
  res.redirect('/docs/v1#/default');
});
