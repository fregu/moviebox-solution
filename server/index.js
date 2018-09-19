import Koa from 'koa'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import historyFallback from 'koa2-history-api-fallback'
import serve from 'koa-static'
import mount from 'koa-mount'
import webpack from 'webpack'
import MemoryFileSystem from 'memory-fs'
import requireFromString from 'require-from-string'
import compress from 'koa-compress'

import https from 'https'
import { ApolloServer } from 'apollo-server-koa'
import schema from '../graphql/schema' // our schema file
import ssrConfig from '../webpack.ssr.js'
dotenv.config()

const app = new Koa()

// serve static files from dist with public path /assets
app.use(mount('/assets', serve(path.resolve(__dirname, '..', 'dist'))))
app.use(
  mount('/sw', serve(path.resolve(__dirname, '..', 'dist'), { index: 'sw.js' }))
)
const apollo = new ApolloServer({
  schema: schema,
  context: ({ ctx }) => ctx
})
apollo.applyMiddleware({ app, path: '/graphql' })

app.use(historyFallback())
app.use(compress())

if (process.env.NODE_ENV === 'development') {
  const memoryFs = new MemoryFileSystem()
  const ServerCompiler = webpack(ssrConfig)

  // Define file system to be in memory for compiler instead
  ServerCompiler.outputFileSystem = memoryFs

  // Start the compiler and require the file from memory
  ServerCompiler.run((err, stats) => {
    if (err) {
      console.log('compiler error', err)
      throw err
    }

    const contents = memoryFs.readFileSync(
      path.resolve(ssrConfig.output.path, ssrConfig.output.filename),
      'utf8'
    )

    const ssr = requireFromString(contents, ssrConfig.output.filename)

    // Use SSR from memory-fs
    app.use(ssr.default)
  })
} else {
  const ssr = require(path.resolve(
    ssrConfig.output.path,
    ssrConfig.output.filename
  ))

  // Use SSR from ../dist/ssr.js
  app.use(ssr.default)
}

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
