import { SET_CATEGORY } from 'store/actions'

export const movies = (state = {}, action) => {
  switch (action.type) {
    case SET_CATEGORY.type:
      return {
        ...state,
        [action.category]: action.results
      }

    default:
      return state
  }
}
