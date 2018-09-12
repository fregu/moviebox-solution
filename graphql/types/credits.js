import { GraphQLObjectType, GraphQLString } from 'graphql'

// Movie credits type
export const CreditType = new GraphQLObjectType({
  name: 'Credit',
  fields: {
    id: { type: GraphQLString },
    character: { type: GraphQLString },
    name: { type: GraphQLString },
    profilePath: {
      type: GraphQLString,
      resolve: ({ profile_path: profilePath }) =>
        profilePath && `https://image.tmdb.org/t/p/w200${profilePath}`
    },
    order: { type: GraphQLString }
  }
})
