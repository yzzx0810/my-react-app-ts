const path = require('path');

const resolve = (dir) => {
  return path.resolve(__dirname, '.', dir);
};

const {
  override, overrideDevServer, addWebpackAlias, disableEsLint, adjustStyleLoaders, addPostcssPlugins
} = require('customize-cra');

const devServerConfig = () => config => {
  return {
    ...config,
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
    }),
    addPostcssPlugins([
      require('postcss-px-to-viewport')({
        unitToConvert: 'px',
        viewportWidth: 1024,
        viewportHeight: 768,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vh',
        fontViewportUnit: 'vh',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: 'vh',
        landscapeWidth: 568
      })
    ])
  ),
  devServer: overrideDevServer(
    devServerConfig()
  )
};