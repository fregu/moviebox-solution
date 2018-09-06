import { SEARCH, SET_SEARCH_RESULT } from 'store/actions'

export const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH.type:
      return {
        ...state,
        query: action.query || '',
        isLoading: action.query && true,
        ...(!action.query ? { results: [] } : {})
      }

    case SET_SEARCH_RESULT.type:
      return { ...state, ...action.data, isLoading: false }

    default:
      return state
  }
}
