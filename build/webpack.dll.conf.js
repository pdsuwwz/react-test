const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'prop-types']
  },
  output: {
    path: path.join(__dirname, '../vendor', 'dll'),
    filename: '[name].[chunkhash].dll.js',
    library: '[name]_[chunkhash]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../vendor/dll', '[name]-manifest.json'),
      name: '[name]_[chunkhash]_library',
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './'
    })
  ]
};