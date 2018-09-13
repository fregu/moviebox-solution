import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import Helmet from 'react-helmet'
import htmlTemplate from './htmlTemplate'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'

import createStore from 'store'
import App from 'App'

dotenv.config()

export default async (ctx, next) => {
  // non SSL uri for SSR requests, server cant accept certificates
  const graphqlUrlLocal = `http://${process.env.HOST}/graphql`

  // graphql uri for Client requests to server depending on
  const graphqlUrl = `${ctx.protocol}://${
    ctx.protocol === 'https' && process.env.SSL_HOST
      ? process.env.SSL_HOST
      : process.env.HOST
  }/graphql`

  // A context for StaticRouter to define paths and rules
  const context = {}

  // Initialize a new Redux state
  const store = createStore({ counter: 14 })

  // Create a SSR apollo client
  const apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: graphqlUrlLocal,
      fetch,
      credentials: 'same-origin',
      headers: {
        cookie: ctx.header.cookie
      }
    }),

    cache: new InMemoryCache(),
    ssrMode: true
  })

  // define the static Root object
  const Root = (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <StaticRouter location={ctx.originalUrl} context={context}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </Provider>
  )

  // Makes Apollo magic and prefetches relevant data
  await renderToStringWithData(Root)

  const reactDom = renderToString(Root)
  const reduxState = store.getState()
  const apolloState = apolloClient.extract()
  const helmetData = Helmet.renderStatic()

  ctx.type = 'text/html; charset=utf-8'
  ctx.status = 200

  // call template to render the HTML document
  ctx.body = htmlTemplate({
    reactDom,
    reduxState,
    apolloState,
    helmetData,
    graphqlUrl
  })
}
