// @flow
import React from 'react'
import classNames from 'classnames'
import ActorCard from 'components/ActorCard'
import Carousel from 'components/Carousel'

type Props = {
  cast?: Array<any>,
  className?: string,
  modifiers?: Array<string>
}

export default function CastList({
  cast = [],
  className,
  modifiers = []
}: Props) {
  return (
    <div
      className={classNames(
        'CastList',
        className,
        modifiers.map(mod => 'CastList--' + mod)
      )}
    >
      <Carousel>
        {cast.map(actor => (
          <ActorCard {...actor} key={actor.id} />
        ))}
      </Carousel>
    </div>
  )
}
