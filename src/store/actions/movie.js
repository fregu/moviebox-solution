export const GET_MOVIE = { type: 'GET_MOVIE' }
export const SET_MOVIE = { type: 'SET_MOVIE' }
export const GET_SHOW = { type: 'GET_SHOW' }
export const SET_SHOW = { type: 'SET_SHOW' }

export const GET_POPULAR_MOVIES = { type: 'GET_POPULAR_MOVIES' }
export const GET_IN_CINEMA = { type: 'GET_IN_CINEMA' }
export const GET_POPULAR_TV = { type: 'GET_POPULAR_TV' }
export const GET_ON_AIR_TV = { type: 'GET_ON_AIR_TV' }

export const SET_CATEGORY = { type: 'SET_CATEGORY' }
export const GET_VIDEOS = { type: 'GET_VIDEOS' }
export const SET_VIDEOS = { type: 'SET_VIDEOS' }

export const GET_CREDITS = { type: 'GET_CREDITS' }
export const SET_CREDITS = { type: 'SET_CREDITS' }

export const getMovie = (id, options = {}) => ({ ...GET_MOVIE, id, options })
export const setMovie = (data, options = {}) => ({
  ...SET_MOVIE,
  data,
  options
})
export const getShow = (id, options = {}) => ({ ...GET_SHOW, id, options })
export const setShow = (data, options = {}) => ({ ...SET_SHOW, data, options })

export const getVideos = (id, media) => ({ ...GET_VIDEOS, id, media })
export const setVideos = (id, data) => ({ ...SET_VIDEOS, id, data })

export const getCredits = (id, media) => ({ ...GET_CREDITS, id, media })
export const setCredits = (id, data) => ({ ...SET_CREDITS, id, data })

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
