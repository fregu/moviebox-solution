import Koa from 'koa'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import historyFallback from 'koa2-history-api-fallback'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import https from 'https'

import { ApolloServer } from 'apollo-server-koa'
import schema from '../graphql/schema' // our schema file

dotenv.config()

const app = new Koa()
const compiler = webpack(webpackConfig)

const apollo = new ApolloServer({
  schema: schema,
  context: ({ ctx }) => ctx
})
apollo.applyMiddleware({ app, path: '/graphql' })

app.use(historyFallback())
app.use(webpackMiddleware(compiler))

if (process.env.NODE_ENV === 'development') {
  const options = {
    key: fs.readFileSync(path.resolve(__dirname, '..', 'cert', 'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '..', 'cert', 'server.crt'))
  }

  const server = https.createServer(options, app.callback())

  server.listen(process.env.SSL_PORT, () => {
    console.log(
      'Listening over HTTPS on https://localhost:' + process.env.SSL_PORT
    )
  })
}

app.listen(process.env.PORT, () => {
  process.env.NODE_ENV === 'development' &&
    console.log('Servering over HTTP on http://localhost:' + process.env.PORT)
})
