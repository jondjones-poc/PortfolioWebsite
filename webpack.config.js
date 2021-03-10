const webpack = require('webpack')
var path = require('path');

module.exports =  {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        loader: 'babel-loader',
        test: /\.js$|jsx/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  }
}