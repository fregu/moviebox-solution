import { VideoType } from './video'
import { CreditType } from './credits'
import { ReviewType } from './reviews'
import { ImageType } from './image'

import TMDB from 'helpers/tmdb-fetch'
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import dotenv from 'dotenv'

dotenv.config()
const api = new TMDB(process.env.TMDB_API_KEY)

export const MovieInfoType = new GraphQLObjectType({
  name: 'MovieInfo',
  fields: {
    id: { type: GraphQLString },
    overview: { type: GraphQLString },
    title: { type: GraphQLString },
    poster_path: {
      type: ImageType,
      resolve: ({ poster_path: posterPath }) => posterPath
    },
    genres: {
      type: GraphQLString,
      resolve: ({ genres = [] }) => genres.map(({ name }) => name).join(', ')
    },
    release_date: { type: GraphQLString },
    vote_average: { type: GraphQLString },
    production_companies: {
      // Resolve array to comma separated string
      type: GraphQLString,
      resolve: ({ production_companies: productionCompanies = [] }) =>
        productionCompanies.map(({ name }) => name).join(', ')
    },
    runtime: { type: GraphQLString },
    videos: {
      type: new GraphQLList(VideoType),
      args: { id: { type: GraphQLString } },
      resolve: ({ id }) =>
        api.get(`/movie/${id}/videos`).then(data => data.results || [])
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      args: { id: { type: GraphQLString } },
      resolve: ({ id }, args) =>
        api.get(`/movie/${id}/reviews`).then(data => data.results)
    },
    credits: {
      type: new GraphQLList(CreditType),
      args: { id: { type: GraphQLString } },
      resolve: ({ id }, args) =>
        api.get(`/movie/${id}/credits`).then(data => data.cast || [])
    }
  }
})
