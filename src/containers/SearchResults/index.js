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
  media: string
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
                  ({ media = 'movie', id, title, posterPath }: ResultProps) => (
                    <MovieCard
                      key={`${media}/${id}`}
                      {...{
                        id,
                        image: posterPath?.small,
                        title,
                        media
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
