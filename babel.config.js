const presets = [
  '@babel/preset-env',
  '@babel/preset-typescript',
  '@babel/preset-react'
]
const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-transform-runtime',
  'react-hot-loader/babel'
]

module.exports = {
  presets,
  plugins
}
