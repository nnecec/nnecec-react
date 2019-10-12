const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
const { resolve } = require('path')

const config = {
  entry: [resolve(__dirname, '../src/index.tsx')],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      components: resolve(__dirname, '../src/components'),
      styles: resolve(__dirname, '../src/styles'),
      assets: resolve(__dirname, '../src/assets'),
      store: resolve(__dirname, '../src/store')
    }
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new WebpackBar(),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, '../public/index.html'),
      favicon: resolve(__dirname, '../public/favicon.ico')
    })
  ]
}

module.exports = config
