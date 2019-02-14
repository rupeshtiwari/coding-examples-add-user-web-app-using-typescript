const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
  context: ROOT,

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ROOT, 'node_modules']
  },

  module: {
    rules: [
      // PRE-LOADERS
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },

      // LOADERS
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      },
      // css
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      // scss
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // images/fonts
      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader'
      }
    ]
  },

  devtool: 'eval-source-map',
  devServer: {}
};
