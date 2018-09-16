const config = require('./webpack.prod')
const path = require('path')

module.exports = {
  entry: './server/ssr.js',
  output: {
    publicPath: '/assets/',
    library: 'ssr',
    libraryTarget: 'umd', // export as importable UMD-module
    path: path.resolve(__dirname, 'dist'),
    filename: 'ssr.js'
  },
  target: 'node',
  mode: 'production',
  // Use loaders from webpack-config, except css loader
  module: {
    rules: [
      ...config.module.rules.filter(rule => !'.css'.match(rule.test)),
      { test: /\.css$/, use: ['null-loader'] },
      { test: /\.html$/, use: ['raw-loader'] }
    ]
  }
}
