// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from 'store/actions'
import './index.css'

type Props = {
  color: string,
  children: any,
  counter: number, // This prop comes from Redux
  incrementCounter: Function, // Mapped dispatch method from connect
  dispatch: any // Dispatch prop always available on connected components
}

class Test extends Component<Props> {
  onClick = () => {
    this.props.incrementCounter(5)
  }
  render() {
    const { children, color = 'red', counter = 0 } = this.props

    return (
      <div style={{ color }} className="Test" onClick={this.onClick}>
        {children}
        <span className="Test-counter" data-testid="counter">
          {counter}
        </span>
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({ counter }), // Map state to props
  dispatch => ({
    // Map actions to props
    incrementCounter: step => dispatch(incrementCounter(step))
  })
)(Test)
