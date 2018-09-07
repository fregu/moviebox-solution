import {
  GET_MOVIE,
  SET_MOVIE,
  GET_SHOW,
  SET_SHOW,
  SET_VIDEOS,
  SET_CREDITS
} from 'store/actions'

export const activeMovie = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE.type:
    case GET_SHOW.type:
      return false
    case SET_MOVIE.type:
    case SET_SHOW.type:
      return action.data || state
    case SET_VIDEOS.type:
      return (
        (state.id === action.id && { ...state, videos: action.data }) || state
      )
    case SET_CREDITS.type:
      return (
        (state.id === action.id && { ...state, credits: action.data }) || state
      )
    default:
      return state
  }
}
