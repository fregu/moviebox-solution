// @flow
import React from 'react'
import classNames from 'classnames'
import Carousel from 'components/Carousel'
import MovieCard from 'components/MovieCard'
import { Query } from 'react-apollo'
import getCategoryQuery from 'queries/getCategory.gql'

type Props = {
  slug: string,
  title?: string,
  className?: string
}

const Category = ({ slug, title, className }: Props) => (
  <div className={classNames('Category', className)}>
    <h1>{title}</h1>
    <Query query={getCategoryQuery} variables={{ category: slug }}>
      {({ data, loading }) => {
        console.log(data)
        const { category = [] } = data
        return (
          <Carousel>
            {category.map(({ id, posterPath, title, type = 'movie' }) => (
              <MovieCard
                key={`${slug}/${type}/${id}`}
                {...{
                  id,
                  image: posterPath?.small,
                  title,
                  type
                }}
              />
            ))}
          </Carousel>
        )
      }}
    </Query>
  </div>
)

export default Category
