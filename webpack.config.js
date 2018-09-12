const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    publicPath: '/'
  },
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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import')({ skipDuplicates: true }),
                require('postcss-preset-env')({
                  features: {
                    'nesting-rules': true,
                    'custom-media-queries': true
                  }
                })
              ],
              sourceMap: true,
              ident: 'postcss'
            }
          }
        ]
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
            loader: 'svg-inline-loader',
            options: {
              removeTags: true,
              removeSVGTagAttrs: true,
              idPrefix: 'icon'
            }
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
