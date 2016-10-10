import mxdEnvironment from 'mxd-environment';
import mxdSwagger from 'mxd-swagger';

import exampleMiddleware from './middlewares/example';
import apiRouter from './routers/api';

const environment = mxdEnvironment();
const app = environment.app;
const express = environment.express;

mxdSwagger(app, express);

app.use(exampleMiddleware());
app.use('/api/v1', apiRouter(express));

app.get('/', (req, res) => {
  res.redirect('/docs/v1#/default');
});
