module.exports = (express) => {
  /* eslint new-cap: "off" */
  const router = express.Router();

  const directory = '../controllers/example';
  router.get('/', require(`${directory}/example`)());

  return router;
};
