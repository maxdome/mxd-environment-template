module.exports = () => (req, res, next) => {
  /* eslint no-console: "off" */
  console.log('example');
  next();
};
