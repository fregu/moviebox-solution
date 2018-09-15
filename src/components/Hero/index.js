// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Title from 'components/Title'
import Video from 'components/Video'
import Figure from 'components/Figure'
import './index.css'

type Props = {
  className?: string,
  modifiers?: Array<string>,
  title?: any,
  children?: any,
  dimension?: string,
  delayVideo?: number,
  background?: {
    image?: string,
    video?: string,
    color?: string,
    fit?: string
  }
}
type State = {
  play?: boolean
}

export default class Hero extends Component<Props, State> {
  state = { play: true }
  videoDelayTimeout: TimeoutID
  componentDidMount = () => {
    this.setState({ play: false })
    if (this.props.delayVideo) {
      setTimeout(() => this.setState({ play: true }), this.props.delayVideo)
    }
  }
  componentDidUpdate = (oldProps: Props, oldState: State) => {
    if (this.state.play && oldState.play) {
      this.setState({ play: false })
    }

    if (!this.state.play && this.props.delayVideo) {
      clearTimeout(this.videoDelayTimeout)
      this.videoDelayTimeout = setTimeout(
        () => this.setState({ play: true }),
        this.props.delayVideo
      )
    }
  }
  render() {
    const {
      className,
      modifiers = [],
      title,
      children,
      background = {},
      dimension
    } = this.props
    const backgroundStyles = {
      backgroundImage: background.image && `url(${background.image})`,
      backgroudColor: background.color,
      fit: background.fit
    }
    const { play } = this.state
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
            {play && background.video ? (
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
}
