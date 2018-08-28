const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // Use Babel to transpile all JavaScript
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|(o|t)tf|eot)$/i,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: 'img/[name].[hash].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: require.resolve('svg-inline-loader'),
            options: {
              removeTags: true,
              removeSVGTagAttrs: true,
              idPrefix: 'icon'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
