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
    title: { type: GraphQLString, resolve: ({ title, name }) => title || name },
    media: {
      type: GraphQLString,
      resolve: ({
        media,
        media_type: mediaType,
        first_air_date: firstAirDate
      }) => media || mediaType || (firstAirDate ? 'tv' : 'movie')
    },
    posterPath: {
      type: ImageType,
      resolve: ({ poster_path: posterPath }) => posterPath
    },
    backdropPath: {
      type: ImageType,
      resolve: ({ backdrop_path: backdropPath }) => backdropPath
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
      resolve: ({ id, media = 'movie' }) =>
        api.get(`/${media}/${id}/videos`).then(data => data.results || [])
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      args: { id: { type: GraphQLString } },
      resolve: ({ id, media }, args) =>
        api.get(`/${media}/${id}/reviews`).then(data => data.results)
    },
    credits: {
      type: new GraphQLList(CreditType),
      args: { id: { type: GraphQLString } },
      resolve: ({ id, media = 'movie' }, args) =>
        api.get(`/${media}/${id}/credits`).then(data => data.cast || [])
    }
  }
})
