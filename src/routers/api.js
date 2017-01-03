module.exports = ({ express }) => {
  /* eslint new-cap: "off" */
  const router = express.Router();
  /* eslint new-cap: "error" */

  router.get('/hello', require('../controllers/api/hello')());

  return router;
};
