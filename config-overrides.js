module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log('env', env);
  return config;
};