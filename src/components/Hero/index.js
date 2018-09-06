// @flow
import React from 'react'
import classNames from 'classnames'
import Title from 'components/Title'
import Video from 'components/Video'
import Figure from 'components/Figure'
import './index.css'

type Props = {
  className?: string,
  modifiers?: Array<string>,
  title?: any,
  children: any,
  dimension?: string,
  background?: {
    image?: string,
    video?: string,
    color?: string,
    fit?: string
  }
}

export default function Hero({
  className,
  modifiers = [],
  children,
  background = {},
  dimension,
  title
}: Props) {
  const backgroundStyles = {
    backgroundImage: background.image && `url(${background.image})`,
    backgroudColor: background.color,
    fit: background.fit
  }
  return (
    <div
      className={classNames(
        'Hero',
        `dimension-${dimension || '16by9'}`,
        className,
        'layout-fullwidth',
        modifiers.map(mod => 'Hero--' + mod)
      )}
    >
      {background ? (
        <div style={backgroundStyles} className="Hero-background">
          {background.video ? (
            <Video
              fill
              className="Hero-backgroundVideo"
              url={background.video}
            />
          ) : null}
          {background.image ? (
            <Figure
              fill
              className="Hero-backgroundImage"
              url={background.image}
            />
          ) : null}
        </div>
      ) : null}
      <div className="Hero-wrapper layout-container layout-gutter">
        {title ? <Title {...title} text={title.text || title} /> : null}
        <div className="Hero-content">{children}</div>
      </div>
    </div>
  )
}
