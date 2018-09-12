import { GraphQLSchema } from 'graphql'
import RootQuery from './root'

// Export the schema with the query object
export default new GraphQLSchema({
  query: RootQuery
})
