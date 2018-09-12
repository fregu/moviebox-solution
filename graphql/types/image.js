import { GraphQLObjectType, GraphQLString } from 'graphql'

export const ImageType = new GraphQLObjectType({
  name: 'ImageType',
  description: 'Image resolver returning a small and a large URL',
  fields: {
    small: {
      type: GraphQLString,
      resolve: imagePath =>
        imagePath && `https://image.tmdb.org/t/p/w300${imagePath}`
    },
    large: {
      type: GraphQLString,
      resolve: imagePath =>
        imagePath && `https://image.tmdb.org/t/p/w500${imagePath}`
    }
  }
})
