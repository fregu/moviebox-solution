import Koa from 'koa'
import historyFallback from 'koa2-history-api-fallback'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'

const app = new Koa()
const compiler = webpack(webpackConfig)

app.use(historyFallback())
app.use(webpackMiddleware(compiler))

app.listen(5500, () => {
  console.log('Listening on http://localhost:5500')
})
