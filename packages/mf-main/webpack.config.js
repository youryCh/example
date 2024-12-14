const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

const path = require('path');
const deps = require('./package.json').dependencies;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  target: ['web', 'es6'],
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',

  output: {
    filename: 'bundle-[hash].js',
    publicPath: process.env.PUBLIC_PATH || 'auto',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },

  devServer: {
    port: 3005,
    historyApiFallback: true,
    hot: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },

  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/']
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'main_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Main': './src/exposes/MainApp.ts',
        './Project': './src/exposes/ProjectApp.ts'
      },
      shared: Object.keys(deps).reduce((acc, cur) => {
        if (
          [
            '@emotion/react',
            'tanstack/react-query',
            'react',
            'react-dom',
            'react-router-dom'
          ].includes(cur)
        ) acc[cur] = deps[cur];

        return acc;
       }, {})
      }
    ),
    new HtmlWebPackPlugin({template: './public/index.html'}),
    new CleanWebpackPlugin(),
    isDev && new ESLintPlugin({extensions: ['ts', 'tsx']})
  ]
};
