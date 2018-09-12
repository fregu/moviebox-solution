import { ResultType, MovieInfoType } from './types'
import TMDB from 'helpers/tmdb-fetch'
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import dotenv from 'dotenv'

dotenv.config()
const api = new TMDB(process.env.TMDB_API_KEY)

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    newMovies: {
      type: new GraphQLList(ResultType),
      resolve: () =>
        api.get(`/movie/now_playing`).then(data => data.results || [])
    },
    movieInfo: {
      type: MovieInfoType,
      args: { id: { type: GraphQLString } },
      resolve: (parentValue, args) => api.get(`/movie/${args.id}`)
    }
  }
})
export default RootQuery
