const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isProdEnv = process.env.API_ENV === 'production'
const suffix = isProdEnv
  ? `warehouse/${process.env.VERSION}/`
  : `warehouse-dev/${process.env.DEV_VERSION}/`

const config = {
  mode: 'production',

  output: {
    publicPath: `//img1.dian.so/static/${suffix}`
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        }
      }
    },

    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    // TODO: remove DEBUG after webpack upgrade
    new webpack.DefinePlugin({
      DEBUG: false
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
      // chunkFilename: 'assets/[id].[hash:6].css',
    })

    // new BundleAnalyzerPlugin(),
  ]
}

module.exports = merge(baseConfig, config)
