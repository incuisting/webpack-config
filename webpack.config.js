let HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
  entry: {
      app: path.resolve(__dirname, 'src', 'index.js')
	    },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
  module: {
      rules: [
              {
               test: /\.js$/,
               loader: 'babel-loader',
               include: path.resolve(__dirname, 'src')
               },
	      {
               test: /\.scss$/,
               loader: ['style-loader', 'css-loader','postcss-loader','sass-loader'],
               include: path.resolve(__dirname, 'src')
              }
          ]
    },
  plugins:[
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html')
	      //src为index.html所在的文件夹
     })
  ]
};

