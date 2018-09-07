// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

type Props = {
  fill?: boolean,
  dimension?: string,
  text?: string,
  children?: any,
  src?: string,
  className?: string,
  modifiers?: Array<string>
}

export default function Figure({
  src,
  text,
  fill,
  children,
  dimension,
  className,
  modifiers = []
}: Props) {
  return (
    <div
      className={classNames(
        'Figure',
        className,
        {
          'Figure--dimension': dimension,
          'Figure--fill': fill
        },
        modifiers.map(mod => 'Figure--' + mod)
      )}
    >
      <div
        className={classNames('Figure-imageWrapper', {
          ['dimension-' + (dimension || '')]: dimension
        })}
      >
        {src ? <img className="Figure-image" src={src} /> : null}
      </div>
      {children}
      {text ? (
        <figcaption className="Figure-figcaption">{text}</figcaption>
      ) : null}
    </div>
  )
}
