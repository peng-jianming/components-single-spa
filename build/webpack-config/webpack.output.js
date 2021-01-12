const path = require('path');

module.exports = (production = false) => {
  return {
    output: production
      ? {
          path: path.resolve(__dirname, '../../dist/admin'),
          filename: 'static/[name]/index.[chunkhash].js',
          chunkFilename: 'static/[name].[id].[chunkhash].js',
          publicPath: 'http://8.129.90.25:9000/admin',
          library: 'managePermission',
          libraryTarget: 'umd'
        }
      : {
          path: path.resolve(__dirname, '../../dist'),
          filename: '[name].js',
          chunkFilename: '[name].js',
          publicPath: 'http://127.0.0.1:3000/admin',
          library: 'managePermission',
          libraryTarget: 'umd'
        }
  };
};
