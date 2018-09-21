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
  const isOnline =
    typeof navigator === 'undefined' ||
    !('onLine' in navigator) ||
    navigator.onLine
  return (
    <div className="SingleView">
      {isOnline ? (
        media === 'movie' ? (
          <SingleMovie id={id} />
        ) : (
          <SingleShow id={id} />
        )
      ) : (
        'Offline'
      )}
    </div>
  )
}
