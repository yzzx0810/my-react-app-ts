const path = require('path');

const resolve = (dir) => {
  return path.resolve(__dirname, '.', dir);
};

const {
  override, overrideDevServer, addWebpackAlias, disableEsLint
} = require('customize-cra');

const devServerConfig = () => config => {
  return {
    ...config,
    clientLogLevel: 'warning',
    proxy: {
      '/kids/': {
        target: 'http://app-gateway-test.zmlearn.com',
        changeOrigin: true,
      },
    },
  }
};

module.exports = {
  webpack: override(
    disableEsLint(),
    addWebpackAlias({
      '@': resolve('src'),
    })
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
};