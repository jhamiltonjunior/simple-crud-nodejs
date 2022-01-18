const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: './frontend/js/page/home.js',
  },
  output: {
    path: path.resolve(__dirname, 'static', 'js'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  devtool: 'source-map',
};
