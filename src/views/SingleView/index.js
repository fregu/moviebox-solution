// @flow
import React from 'react'
import SingleMovie from 'containers/SingleMovie'
import SingleShow from 'containers/SingleShow'

type Props = {
  match: { params: { media: string, id: string } }
}
export default function SingleView({
  match: {
    params: { id, media }
  }
}: Props) {
  return (
    <div className="SingleView">
      {media === 'movie' ? <SingleMovie id={id} /> : <SingleShow id={id} />}
    </div>
  )
}
