// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Card from 'components/Card'
import Figure from 'components/Figure'
import Link from 'components/Link'
import { connect } from 'react-redux'
import { setActive } from 'store/actions'
import './index.css'

type Props = {
  id: string,
  title: string,
  image: string,
  media?: string,
  className?: string,
  modifiers?: Array<string>,
  setActive: Function
}

class MovieCard extends Component<Props> {
  link: HTMLElement
  hoverTimeout: TimeoutID
  onFocus = () => {
    const { id, media, setActive } = this.props
    setActive(id, media)
  }
  onMouseOver = (event: Event) => {
    this.hoverTimeout = setTimeout(() => this.link.focus(), 500)
  }
  onMouseOut = (event: Event) => {
    clearTimeout(this.hoverTimeout)
  }
  render() {
    const {
      id,
      image,
      title,
      media = 'movie',
      className,
      modifiers = []
    } = this.props

    return (
      <Card
        className={classNames(
          'MovieCard',
          className,
          modifiers.map(mod => 'MovieCard--' + mod)
        )}
      >
        <Link
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          innerRef={link => (this.link = link)}
          to={`/${media}/${id}`}
          discreet
          onFocus={this.onFocus}
        >
          <Figure src={image}>{title}</Figure>
        </Link>
      </Card>
    )
  }
}
export default connect(
  () => ({}),
  dispatch => ({
    setActive: (id, media) => dispatch(setActive(id, media))
  })
)(MovieCard)
