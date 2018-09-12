// @flow
import React from 'react'
import classNames from 'classnames'
import Figure from 'components/Figure'
import './index.css'

type Props = {
  profilePath: string,
  character: string,
  name: string,
  className?: string,
  modifiers?: Array<string>
}

export default function ActorCard({
  profilePath,
  character,
  name,
  className,
  modifiers = []
}: Props) {
  return (
    <Figure
      className={classNames(
        'ActorCard',
        className,
        modifiers.map(mod => 'ActorCard--' + mod)
      )}
      modifiers={['round']}
      dimension={'1by1'}
      src={profilePath}
    >
      <span className="display-block">{name}</span>
      <em className="display-block">{character}</em>
    </Figure>
  )
}
