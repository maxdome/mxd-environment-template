process.env.stage = 'stage';

const config = require('mxd-config')();
const logger = require('mxd-logging')(config)('lambda');
const lambda = require('mxd-lambda')(logger);

lambda.use(require('./middlewares/example'));

module.exports = {
  hello: lambda.function('hello', require('./controllers/api/hello')())
};
