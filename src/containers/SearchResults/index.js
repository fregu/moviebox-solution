// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Carousel from 'components/Carousel'
import MovieCard from 'components/MovieCard'

type ResultProps = {
  id: string,
  poster_path: { small: string, large: string },
  title: string,
  overview: string,
  type: string
}

type Props = {
  search: {
    loading: boolean,
    total_results: number,
    results?: Array<ResultProps>
  }
}

class SearchResults extends Component<Props> {
  render() {
    const {
      search: { loading, results = [] }
    } = this.props
    return loading ? (
      'Laddar'
    ) : (
      <div className="SearchResults">
        {results.length ? (
          <Carousel>
            {results.map(
              ({ type = 'movie', id, title, poster_path: posterPath }) => (
                <MovieCard
                  key={`${type}/${id}`}
                  {...{
                    id,
                    image: posterPath?.small,
                    title,
                    type
                  }}
                />
              )
            )}
          </Carousel>
        ) : (
          'Inga träffar'
        )}
      </div>
    )
  }
}
export default connect(({ search }) => ({ search }))(SearchResults)
