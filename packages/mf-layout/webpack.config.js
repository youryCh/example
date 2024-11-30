const HtmlWebPackPlugin = require('html-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

const path = require('path');
const deps = require('./package.json').dependencies;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  target: ['web', 'es6'],
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',
  output: {
    publicPath: 'auto',
    filename: 'bundle-[hash].js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },

  devServer: {
    hot: true,
    open: true,
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'babel-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif|lottie)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'layout',
      filename: 'remoteEntry.js',
      exposes: {
        './NotFoundPage': './src/exposes/NotFoundPageApp',
        './Main': './src/exposes/LayoutApp',
        './NotFoundPage': './src/exposes/ErrorPageApp.ts'
      },
      shared: Object.keys(deps).reduce((acc, cur) => {
        if (
          [
            '@emotion/react',
            'react',
            'react-dom',
            'react-router-dom'
          ].includes(cur)
        ) acc[cur] = deps[cur];

        return acc;
      }, {})
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),

    isDev && new EsLintPlugin({extensions: ['ts', 'tsx']})
  ]
};
