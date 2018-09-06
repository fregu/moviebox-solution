// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Carousel from 'components/Carousel'
import MovieCard from 'components/MovieCard'
import { getCategory } from 'store/actions'

type Props = {
  slug: string,
  title?: string,
  className?: string,
  results?: Array<any>,
  getCategory: Function
}

class Category extends Component<Props> {
  componentDidMount = () => {
    const { getCategory, slug } = this.props
    getCategory(slug)
  }

  render() {
    const { slug, title, results = [], className } = this.props
    return (
      <div className={classNames('Category', className)}>
        <h1>{title}</h1>
        <Carousel>
          {results.map(
            ({ id, poster_path: posterPath, title, type = 'movie' }) => (
              <MovieCard
                key={`${slug}/${type}/${id}`}
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
      </div>
    )
  }
}
export default connect(
  ({ movies }, { slug }) => ({ results: movies?.[slug] }),
  dispatch => ({ getCategory: category => dispatch(getCategory(category)) })
)(Category)
