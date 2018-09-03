// By importing actions we make sure we always use pre-defined actions
import { INCREMENT, DECREMENT } from 'store/actions'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT.type:
      return state + (action.step || 1)
    case DECREMENT.type:
      return state - (action.step || 1)
    default:
      return state
  }
}
