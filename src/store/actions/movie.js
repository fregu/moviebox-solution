export const GET_MOVIE = { type: 'GET_MOVIE' }
export const SET_MOVIE = { type: 'SET_MOVIE' }
export const GET_SHOW = { type: 'GET_SHOW' }
export const SET_SHOW = { type: 'SET_SHOW' }

export const GET_POPULAR_MOVIES = { type: 'GET_POPULAR_MOVIES' }
export const GET_IN_CINEMA = { type: 'GET_IN_CINEMA' }
export const GET_POPULAR_TV = { type: 'GET_POPULAR_TV' }
export const GET_ON_AIR_TV = { type: 'GET_ON_AIR_TV' }

export const SET_CATEGORY = { type: 'SET_CATEGORY' }

export const getMovie = id => ({ ...GET_MOVIE, id })
export const setMovie = data => ({ ...SET_MOVIE, data })
export const getShow = id => ({ ...GET_SHOW, id })
export const setShow = data => ({ ...SET_SHOW, data })

export const getCategory = category => {
  switch (category) {
    case 'poplular_movies':
      return GET_POPULAR_MOVIES
    case 'now_playing':
      return GET_IN_CINEMA
    case 'popular_shows':
      return GET_POPULAR_TV
    case 'on_air':
      return GET_ON_AIR_TV
  }
}
export const setCategory = (category, results) => ({
  ...SET_CATEGORY,
  category,
  results
})
