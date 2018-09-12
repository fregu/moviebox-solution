import { ResultType, MovieInfoType } from './types'
import TMDB from 'helpers/tmdb-fetch'
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import dotenv from 'dotenv'

dotenv.config()
const api = new TMDB(process.env.TMDB_API_KEY)

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    category: {
      type: new GraphQLList(ResultType),
      args: { category: { type: GraphQLString } },
      resolve: (root, { category }) => {
        let path
        switch (category) {
          case 'poplular_movies':
            path = `/movie/popular`
            break
          case 'now_playing':
            path = `/movie/now_playing`
            break
          case 'popular_shows':
            path = `/tv/popular`
            break
          case 'on_air':
            path = `/tv/on_the_air`
            break
        }

        return api
          .get(path, { language: 'sv_SE' })
          .then(data => data.results || [])
      }
    },
    newMovies: {
      type: new GraphQLList(ResultType),
      resolve: () =>
        api.get(`/movie/now_playing`).then(data => data.results || [])
    },
    movieInfo: {
      type: MovieInfoType,
      args: { id: { type: GraphQLString }, type: { type: GraphQLString } },
      resolve: (root, { type, id }) =>
        api.get(`/${type || 'movie'}/${id}`).then(data => ({ ...data, type }))
    },
    search: {
      type: new GraphQLList(ResultType),
      args: { query: { type: GraphQLString } },
      resolve: (root, { query }) =>
        api
          .get(`/search/multi`, {
            language: 'sv_SE',
            include_adult: false,
            query
          })
          .then(data => data.results || [])
    }
  }
})
export default RootQuery
