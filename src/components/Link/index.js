// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import { Link as RouterLink } from 'react-router-dom'
import './index.css'

type Props = {
  to: string,
  discreet?: boolean,
  className?: string,
  modifiers?: Array<string>,
  text?: string,
  children: any,
  domRef?: Function
}

export default class Link extends Component<Props> {
  render() {
    const {
      to,
      discreet,
      className,
      modifiers = [],
      text,
      children,
      domRef,
      ...rest
    } = this.props
    return (
      <RouterLink
        to={to}
        className={classNames(
          'Link',
          className,
          { 'Link--discreet': discreet },
          modifiers.map(mod => 'Link--' + mod)
        )}
        {...rest}
      >
        {text || children}
      </RouterLink>
    )
  }
}
