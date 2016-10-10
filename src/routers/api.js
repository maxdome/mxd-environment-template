import helloApiController from '../controllers/api/hello';

export default (express) => {
  /* eslint new-cap: "off" */
  const router = express.Router();

  router.get('/hello', helloApiController());

  return router;
};
