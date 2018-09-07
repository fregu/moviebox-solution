// @flow
import React, { Component } from 'react'
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
type State = {
  loaded?: boolean
}

export default class Video extends Component<Props, State> {
  state = {
    loaded: false
  }
  onLoad = () => {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 500)
  }
  render() {
    const { url, fill, dimension, className, modifiers = [] } = this.props
    const { loaded } = this.state
    return (
      <Figure
        fill={fill}
        dimension={dimension}
        className={classNames(
          'Video',
          { 'Video--loaded': loaded },
          className,
          modifiers.map(mod => 'Video--' + mod)
        )}
      >
        <iframe src={url} onLoad={this.onLoad} className="Video-iframe" />
      </Figure>
    )
  }
}
