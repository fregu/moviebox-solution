// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Category from 'containers/Category'
import './index.css'

type Props = {
  className?: string
}

class CategoryBrowser extends Component<Props> {
  categories = [
    {
      title: 'Popular movies',
      slug: 'poplular_movies'
    },
    {
      title: 'Plying in cinemas',
      slug: 'now_playing'
    },
    {
      title: 'Popular TV shows',
      slug: 'popular_shows'
    },
    {
      title: 'Airing on TV',
      slug: 'on_air'
    }
  ]
  render() {
    const { className } = this.props
    return (
      <div
        className={classNames('CategoryBrowser', 'overflow-auto', className)}
      >
        {this.categories.map(category => (
          <Category key={category.slug} {...category} />
        ))}
      </div>
    )
  }
}
export default CategoryBrowser
