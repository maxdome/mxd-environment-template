module.exports = (express) => {
  /* eslint new-cap: "off" */
  const router = express.Router();

  const directory = '../controllers/api';
  router.get('/', require(`${directory}/hello`)());

  return router;
};
