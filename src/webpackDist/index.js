
var path = require('path')
var webpack = require('webpack')
var pckg = require(path.join(process.cwd(), 'package.json'))

module.exports = {
  entry: ['./src/dist'],
  output: {
    filename: pckg.name + '.min.js',
    library: pckg.name,
    libraryTarget: 'var',
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': 'false',
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      mange: true,
      comments: false,
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(process.cwd(), 'src'),
      query: {
        extends: path.join(__dirname, '../../.babelrc'),
      }
    }, {
      test: /\.css$/,
      loader: ['style', 'css'],
      include: path.join(process.cwd(), 'src')
    }],
  },
}
