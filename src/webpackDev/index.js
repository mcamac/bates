var autoprefixer = require('autoprefixer')
var precss = require('precss')
var nested = require('postcss-nested')
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
      loaders: ['style', 'css', 'postcss'],
      include: path.join(process.cwd(), 'src')
    }]
  },
  postcss: () => {
    return [autoprefixer, precss, nested]
  }
}
