import { GraphQLObjectType, GraphQLString } from 'graphql'

// Movie reviews type
export const ReviewType = new GraphQLObjectType({
  name: 'Review',
  fields: {
    id: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: GraphQLString }
  }
})
