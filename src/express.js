const { app, express } = require('mxd-environment')();

app.get('/', (req, res) => {
  res.redirect('/docs/v1#/default');
});

app.use(require('./middlewares/example'));
app.use('/api/v1', require('./routers/api')({ express }));
