const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === "production" ? "/auto-test/" : "/",
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  }, devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
