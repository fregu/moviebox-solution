// @flow
import React, { Component } from 'react'

type Props = {
  color: number,
  children: any
}

type State = {}
// export default function Test({ children, color = 'red' }: Props) {...}

export default class Test extends Component<Props, State> {
  render() {
    const { color, children } = this.props

    console.log(color + 1)
    return (
      <div style={{ color }} className="Test">
        {children}
      </div>
    )
  }
}
