const merge = require('webpack-merge')
const common = require('./webpack.common.js')('production')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
})
