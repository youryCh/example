const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const {DefinePlugin} = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const deps = require('./package.json').dependencies;
const federation = require('./conf/federation')[process.env.NODE_ENV];
const api = require('./conf/api');
const auth = require('./conf/auth');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  target: ['web', 'es6'],
  entry: './src/index.ts',
  mode: process.env.NODE_ENV || 'development',

  output: {
    filename: 'bundle-[hash].js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    environment: {asyncFunction: true}
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(svg|ttf|png|jpg|gif)$/i,
        type: 'asset'
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_root",
      remotes: federation.static,
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          requiredVersion: deps['react-router-dom'],
          singleton: true
        }
      },
    }),

    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png'
    }),

    new DefinePlugin({
      API: JSON.stringify(api),
      AUTH: JSON.stringify(auth),
      DYNAMIC_REMOTES: JSON.stringify(federation.dynamic)
    }),

    isDev && new ESLintPlugin({extensions: ['ts', 'tsx']}),

    new CleanWebpackPlugin()
  ]
};
