// @flow
import React from 'react'
import classNames from 'classnames'
import Figure from 'components/Figure'
import './index.css'

type Props = {
  fill?: boolean,
  url: string,
  dimension?: string,
  className?: string,
  modifiers?: Array<string>
}

export default function Video({
  url,
  fill,
  dimension,
  className,
  modifiers = []
}: Props) {
  return (
    <Figure
      fill={fill}
      dimension={dimension}
      className={classNames(
        'Video',
        className,
        modifiers.map(mod => 'Video--' + mod)
      )}
    >
      <iframe src={url} className="Video-iframe" />
    </Figure>
  )
}
