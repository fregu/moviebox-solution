// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import Button from 'components/Button'
import scrollTo from 'helpers/scrollTo'
import './index.css'

type Props = {
  className?: string,
  children: any
}
type State = {
  scrollX: number
}

export default class Carousel extends Component<Props, State> {
  wrapper: HTMLDivElement
  list: HTMLUListElement
  ticker: boolean
  state = {
    scrollX: 0
  }

  onScrollClick = (direction: number = 1) => {
    if (this.list.firstElementChild) {
      const itemWidth = this.list.firstElementChild.clientWidth
      const scrollItemLength = Math.floor(this.wrapper.clientWidth / itemWidth)
      const scrollDistance = scrollItemLength * itemWidth
      const startLeft =
        this.wrapper.scrollLeft > 0
          ? Math.floor(this.wrapper.scrollLeft / itemWidth) * itemWidth
          : 0
      scrollTo(
        this.wrapper,
        startLeft + scrollDistance * direction,
        400,
        'scrollLeft'
      )
    }
  }

  render() {
    const { className, children } = this.props
    return Array.isArray(children) ? (
      <div className={classNames('Carousel', className)}>
        <div className="Carousel-wrapper" ref={el => el && (this.wrapper = el)}>
          <ul className="Carousel-list" ref={el => el && (this.list = el)}>
            {children.map((child, index) => (
              <li key={index} className="Carousel-item">
                {child}
              </li>
            ))}
          </ul>
        </div>

        <div className="Carousel-actions">
          <Button
            onClick={() => this.onScrollClick(-1)}
            hiddenText
            text="Left"
            icon="chevronLeft"
            className="Carousel-scrollButton Carousel-scrollButton--left"
          />
          <Button
            onClick={() => this.onScrollClick(1)}
            hiddenText
            text="Right"
            icon="chevronRight"
            className="Carousel-scrollButton Carousel-scrollButton--right"
          />
        </div>
      </div>
    ) : (
      children || null
    )
  }
}
