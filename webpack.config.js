const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const DEV = (process.env.NODE_ENV === 'development');

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'web',
  context: __dirname,
  entry: {
    app: [
      path.resolve(__dirname, 'src', 'index.jsx'),
    ],
  },
  output: {
    filename: DEV ? '[name].js' : '[name].[hash].js',
    chunkFilename: DEV ? '[name].js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: path.resolve(__dirname, 'public', 'template.ejs'),
      inject: false,
      cache: false,
      minify: !DEV ? {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
      } : false,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '.cache-loader'),
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '.cache-loader'),
            },
          },
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    progress: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
  },
  devtool: DEV ? 'source-map' : false,
  stats: DEV ? 'normal' : 'errors-only',
  performance: {
    hints: DEV ? false : 'warning',
  },
};
