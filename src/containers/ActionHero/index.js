// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Hero from 'components/Hero'
import { Query } from 'react-apollo'
import getHeroMedia from 'queries/getHeroMedia.gql'

type Props = {
  id?: string,
  media?: string,
  title?: string,
  withVideo?: boolean,
  background?: { image?: string, color?: string, fit?: string, video?: string },
  className?: string,
  children?: any
}

class ActionHero extends Component<Props> {
  render() {
    const {
      id,
      media,
      title,
      background,
      withVideo,
      className,
      children
    } = this.props

    const fallbackHero = (
      <Hero title={title} className={'ActionHero-hero'} background={background}>
        {children}
      </Hero>
    )

    return (
      <div className={classNames('ActionHero', className)}>
        {id && media ? (
          <Query query={getHeroMedia} variables={{ id, media }}>
            {({ data: { movieInfo } = {}, error, loading }) => {
              return (
                <Hero
                  className={'ActionHero-hero'}
                  title={movieInfo?.title}
                  delayVideo={1000}
                  background={{
                    image: movieInfo?.backdropPath?.large,
                    video:
                      withVideo && movieInfo?.videos.length
                        ? movieInfo?.videos?.[0]?.embed +
                          '?autoplay=1&mute=1&controls=1&loop=1&disablekb=1&color=black&iv_load_policy=0&showinfo=0&modestbranding=1&autohide=1'
                        : ''
                  }}
                />
              )
            }}
          </Query>
        ) : (
          fallbackHero
        )}
      </div>
    )
  }
}

export default ActionHero
