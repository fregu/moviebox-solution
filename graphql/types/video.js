import { GraphQLObjectType, GraphQLString } from 'graphql'

export const VideoType = new GraphQLObjectType({
  name: 'Video',
  fields: {
    id: { type: GraphQLString },
    key: { type: GraphQLString },
    posterImage: {
      type: GraphQLString,
      resolve: ({ key }) => key && `https://img.youtube.com/vi/${key}/0.jpg`
    },
    url: {
      type: GraphQLString,
      resolve: ({ key }) => key && `https://www.youtube.com/watch?v=${key}`
    },
    embed: {
      type: GraphQLString,
      resolve: ({ key }) => key && `https://www.youtube.com/embed/${key}`
    }
  }
})
