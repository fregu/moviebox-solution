import TMDB from 'helpers/tmdb-fetch'
import {
  GET_MOVIE,
  SET_MOVIE,
  GET_SHOW,
  SET_SHOW,
  SEARCH,
  GET_POPULAR_MOVIES,
  GET_IN_CINEMA,
  GET_POPULAR_TV,
  GET_ON_AIR_TV,
  GET_VIDEOS,
  setMovie,
  setShow,
  setSearchResults,
  setCategory,
  getVideos,
  setVideos
} from 'store/actions'
const API_KEY = '72e8013728917209a38a06e945fb6a2f'
const api = new TMDB(API_KEY)

function formatResult(item) {
  if (!item) return
  const type = item.media_type || (item.first_air_date ? 'tv' : 'movie')
  return {
    ...item,
    title: item.title || item.name,
    type,
    url: `/${type}/${item.id}`,
    backdrop_path: {
      small:
        item.backdrop_path &&
        `https://image.tmdb.org/t/p/w300${item.backdrop_path}`,
      large:
        item.backdrop_path &&
        `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
    },
    poster_path: {
      small:
        item.poster_path &&
        `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      large:
        item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }
  }
}
function formatVideo(item) {
  return (
    item && {
      ...item,
      url: `https://www.youtube.com/watch?v=${item.key}`,
      embed: `https://www.youtube.com/embed/${item.key}`
    }
  )
}
export const tmdb = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case GET_MOVIE.type:
      api
        .get(`/movie/${action.id}`, { language: 'sv_SE' })
        .then(formatResult)
        .then(data => dispatch(setMovie(data)))
      break
    case GET_SHOW.type:
      api
        .get(`/tv/${action.id}`, { language: 'sv_SE' })
        .then(formatResult)
        .then(data => dispatch(setShow(data)))
      break
    case SET_MOVIE.type:
      dispatch(getVideos(action.data.id, 'movie'))
      break
    case SET_SHOW.type:
      dispatch(getVideos(action.data.id, 'tv'))
      break
    case GET_VIDEOS.type:
      api
        .get(`/${action.media}/${action.id}/videos`)
        .then(data => data.results.map(formatVideo))
        .then(data => dispatch(setVideos(action.id, data)))
      break
    case SEARCH.type:
      if (action.query) {
        api
          .get(`/search/multi`, {
            language: 'sv_SE',
            include_adult: false,
            query: action.query
          })
          .then(data => ({
            ...data,
            results: (data.results && data.results.map(formatResult)) || []
          }))
          .then(data => dispatch(setSearchResults(data)))
      }
      break
    case GET_POPULAR_MOVIES.type:
      api
        .get(`/movie/popular`, {
          language: 'sv_SE'
        })
        .then(data => ({
          ...data,
          results: (data.results && data.results.map(formatResult)) || []
        }))
        .then(data => dispatch(setCategory('poplular_movies', data.results)))
      break
    case GET_IN_CINEMA.type:
      api
        .get(`/movie/now_playing`, {
          language: 'sv_SE'
        })
        .then(data => ({
          ...data,
          results: (data.results && data.results.map(formatResult)) || []
        }))
        .then(data => dispatch(setCategory('now_playing', data.results)))
      break
    case GET_POPULAR_TV.type:
      api
        .get(`/tv/popular`, {
          language: 'sv_SE'
        })
        .then(data => ({ ...data, results: data.results.map(formatResult) }))
        .then(data => dispatch(setCategory('popular_shows', data.results)))
      break
    case GET_ON_AIR_TV.type:
      api
        .get(`/tv/on_the_air`, {
          language: 'sv_SE'
        })
        .then(data => ({ ...data, results: data.results.map(formatResult) }))
        .then(data => dispatch(setCategory('on_air', data.results)))
      break
  }
  next(action)
}
