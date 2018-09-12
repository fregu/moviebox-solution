import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from 'store'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql'
})

const store = createStore({ counter: 14 })

const Root = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
