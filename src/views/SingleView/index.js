// @flow
import React from 'react'
import SingleMovie from 'containers/SingleMovie'
import SingleShow from 'containers/SingleShow'

type Props = {
  match: { params: { type: string, id: string } }
}
export default function SingleView({
  match: {
    params: { id, type }
  }
}: Props) {
  return (
    <div className="SingleView">
      {type === 'movie' ? <SingleMovie id={id} /> : <SingleShow id={id} />}
    </div>
  )
}
