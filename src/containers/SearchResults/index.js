// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Query } from 'react-apollo'
import searchQuery from 'queries/search.gql'
import Carousel from 'components/Carousel'
import MovieCard from 'components/MovieCard'

type ResultProps = {
  id: string,
  posterPath: { small: string, large: string },
  title: string,
  overview: string,
  type: string
}

type Props = {
  search: {
    query: string
  }
}

class SearchResults extends Component<Props> {
  render() {
    const {
      search: { query }
    } = this.props
    return (
      <div className="SearchResults">
        <Query query={searchQuery} variables={{ query }}>
          {({ data: { search = [] }, loading }) =>
            loading ? (
              'Laddar'
            ) : search.length ? (
              <Carousel>
                {search.map(
                  ({ type = 'movie', id, title, posterPath }: ResultProps) => (
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
            )
          }
        </Query>
      </div>
    )
  }
}
export default connect(({ search }) => ({ search }))(SearchResults)
