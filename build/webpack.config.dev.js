const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { resolve } = require('path')

const devServer = {
  port: 3004,
  hotOnly: true,
  contentBase: resolve(__dirname, '../dist')
}

const config = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  
  devServer,

  // entry: [
  //   `webpack-dev-server/client?http://localhost:${devServer.port}`,
  //   'webpack/hot/only-dev-server',
  //   'react-hot-loader/patch',
  // ],

  output: {
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = merge.smart(baseConfig, config)
