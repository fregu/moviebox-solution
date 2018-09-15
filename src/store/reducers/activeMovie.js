import { SET_ACTIVE, CLEAR_ACTIVE } from 'store/actions/movie'

export const activeMovie = (state = {}, { type, ...action }) => {
  switch (type) {
    case SET_ACTIVE.type:
      return { ...action }
    case CLEAR_ACTIVE.type:
      return null
    default:
      return state
  }
}
