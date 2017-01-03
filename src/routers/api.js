module.exports = ({ express }) => {
  // eslint-disable-next-line new-cap
  const router = express.Router();

  router.get('/hello', require('../controllers/api/hello')());

  return router;
};
