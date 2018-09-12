import { ImageType } from './image'
import { GraphQLObjectType, GraphQLString } from 'graphql'

export const ResultType = new GraphQLObjectType({
  name: 'Result',
  fields: {
    id: { type: GraphQLString },
    backdropPath: {
      type: ImageType,
      resolve: ({ backdrop_path: backdropPath }) => backdropPath
    },
    posterPath: {
      type: ImageType,
      resolve: ({ poster_path: posterPath }) => posterPath
    },
    title: { type: GraphQLString }
  }
})
