
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(process.cwd(), 'src'),
      query: {
        extends: path.join(__dirname, '../../.babelrc'),
        cacheDirectory: true,
      }
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: path.join(process.cwd(), 'src')
    }]
  }
}
