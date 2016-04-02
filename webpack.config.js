/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var precss = require('precss');
var lost = require('lost');
var autoprefixer = require('autoprefixer');

var babelSettings = {
    presets: ['es2015-loose', 'stage-1'],
    plugins: ['transform-decorators-legacy']
  };

module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  },
  entry: {
    main: [
      'babel-polyfill',
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new AureliaWebpackPlugin(),
    new ProvidePlugin({
      Promise: 'bluebird'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel?' + JSON.stringify(babelSettings) + '!ts-loader',
        exclude: /(node_modules|typings)/
      },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: babelSettings },
      { test: /\.css?$/, loader: 'style!css!postcss' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  },
  postcss: function () {
      return [precss, autoprefixer, lost];
  }
};
