const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin( {
      template: './src/index.html',
      filename: './index.html',
    } ),
  ],
};
