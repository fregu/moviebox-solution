// @flow
import React from 'react'
import classNames from 'classnames'
import Grid from 'components/Grid'
import Figure from 'components/Figure'
import Link from 'components/Link'

type VideoProps = {
  embed: string,
  url: string,
  key: string,
  name: string
}
type Props = {
  className?: string,
  modifiers?: Array<string>,
  videos?: Array<VideoProps>
}

export default function VideoGrid({
  className,
  videos = [],
  modifiers = []
}: Props) {
  return (
    <div
      className={classNames(
        'VideoGrid',
        className,
        modifiers.map(mod => 'VideoGrid--' + mod)
      )}
    >
      <Grid withGap widths={{ s: '1of2', m: '1of4' }}>
        {videos.map((video, index) => (
          <Link
            key={video.key}
            to={video.url}
            modifiers={['discreet']}
            target="_blank"
          >
            <Figure
              dimension="16by9"
              src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
              text={video.name}
            />
          </Link>
        ))}
      </Grid>
    </div>
  )
}
