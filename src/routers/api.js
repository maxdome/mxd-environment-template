module.exports = (express) => {
  /* eslint new-cap: "off" */
  const router = express.Router();

  router.get('/hello', require('../controllers/api/hello')());

  return router;
};
