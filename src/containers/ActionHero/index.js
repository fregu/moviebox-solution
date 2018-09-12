// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Hero from 'components/Hero'

type Props = {
  title?: string,
  withVideo?: boolean,
  background?: { image?: string, color?: string, fit?: string, video?: string },
  className?: string,
  children?: any,
  selectedItem?: {
    title?: string,
    backdropPath?: { large?: string },
    videos?: Array<any>
  }
}

class ActionHero extends Component<Props> {
  render() {
    const {
      title,
      background,
      withVideo,
      selectedItem: {
        title: selectedTitle,
        backdropPath: { large: backDrop } = {},
        videos = []
      } = {},
      className,
      children
    } = this.props
    return (
      <div className={classNames('ActionHero', className)}>
        <Hero
          className={'ActionHero-hero'}
          title={selectedTitle || title}
          background={
            selectedTitle
              ? {
                  image: backDrop,
                  video:
                    withVideo && videos.length
                      ? videos?.[0]?.embed +
                        '?autoplay=1&mute=1&controls=1&loop=1&disablekb=1&color=black&iv_load_policy=0&showinfo=0&modestbranding=1&autohide=1'
                      : ''
                }
              : background
          }
        >
          {!selectedTitle ? children : null}
        </Hero>
      </div>
    )
  }
}

export default ActionHero
