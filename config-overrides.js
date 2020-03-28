const path = require('path');

const resolve = (dir) => {
  return path.resolve(__dirname, '.', dir);
};

const {
  override, overrideDevServer, addWebpackAlias, disableEsLint, adjustStyleLoaders
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
    }),
    adjustStyleLoaders(rule => {
      if (rule.test.toString().includes('scss')) {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: './src/styles/index.scss'
          }
        });
      }
    })
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
};