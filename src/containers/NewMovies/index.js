// @flow
import React from 'react'
import { Query } from 'react-apollo'
import newMoviesQuery from 'queries/newMovies.gql'
import Carousel from 'components/Carousel'
import MovieCard from 'components/MovieCard'

type MovieResult = {
  id: string,
  title?: string,
  posterPath?: {
    small: string
  }
}

const NewMovies = () => (
  <Query query={newMoviesQuery}>
    {({ data: { newMovies = [] } = {}, loading }) =>
      loading ? (
        'laddar'
      ) : (
        <Carousel>
          {newMovies.map((movie: MovieResult) => (
            <MovieCard
              type="movie"
              key={movie.id}
              {...movie}
              image={movie.posterPath?.small}
            />
          ))}
        </Carousel>
      )
    }
  </Query>
)
export default NewMovies
