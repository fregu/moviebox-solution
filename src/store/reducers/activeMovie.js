import { GET_MOVIE, SET_MOVIE, GET_SHOW, SET_SHOW } from 'store/actions'

export const activeMovie = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE.type:
    case GET_SHOW.type:
      return false
    case SET_MOVIE.type:
    case SET_SHOW.type:
      return action.data
    default:
      return state
  }
}
