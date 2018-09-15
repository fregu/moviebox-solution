const merge = require('webpack-merge')
const common = require('./webpack.common.js')('production')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = merge(common, {
  output: {
    publicPath: '/assets',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
})
