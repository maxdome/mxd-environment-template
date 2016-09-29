module.exports = (express) => {
  /* eslint new-cap: "off" */
  const router = express.Router();

  const directory = '../controllers/api';
  router.get('/hello', require(`${directory}/hello`)());

  return router;
};
