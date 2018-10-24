import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import * as middlewares from './middlewares'

// If redux devtools is installed, use its composeEnhancers
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default (initialState = { counter: 0 }) => {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(...Object.values(middlewares)))
  )
}
