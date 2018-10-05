// @flow
import React, { Component } from 'react'

type Props = {
  value?: number | string,
  step?: number | string
}
type State = {
  counter?: number
}

class Counter extends Component<Props, State> {
  state = {}
  onClick = (event: Event) => {
    const { step, value = 0 } = this.props
    const {
      counter = Number(!isNaN(value) ? value : 0) +
        Number(!isNaN(step) ? step : 1)
    } = this.state

    this.setState({
      counter
    })
  }
  render() {
    const { value = 0 } = this.props
    const { counter } = this.state

    return (
      <div className="Counter" data-testid="counter" onClick={this.onClick}>
        {counter || (!isNaN(value) ? value : 0)}
      </div>
    )
  }
}

export default Counter
