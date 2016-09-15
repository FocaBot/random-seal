const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'main.js',
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!grade)|vue\/dist|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel',
      },
    ],
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime'],
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  module.exports.devtool = '#source-map';
}
