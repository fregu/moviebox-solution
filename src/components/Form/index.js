// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import serialize from 'form-serialize'

type Props = {
  className?: string,
  method?: string,
  children?: any,
  onSubmit?: Function,
  onChange?: Function
}
type State = {
  isValid: boolean,
  isChanged: boolean,
  valueString: string
}

export default class Form extends Component<Props, State> {
  el: HTMLFormElement
  state = {
    isChanged: false,
    isValid: true,
    valueString: ''
  }
  componentDidMount = () => {
    // Set initial values to state
    const values = serialize(this.el, { hash: true })
    this.setState({
      valueString: JSON.stringify(values)
    })

    // Stay in control of events
    this.el.addEventListener('change', this.onChange)
    this.el.addEventListener('input', this.onChange)
    this.el.addEventListener('submit', this.onSubmit)

    // check initial validation
    this.validateFields()
  }
  componentWillUnmount = () => {
    // Remove events
    this.el.removeEventListener('change', this.onChange)
    this.el.removeEventListener('input', this.onChange)
    this.el.removeEventListener('submit', this.onSubmit)
  }

  onSubmit = (event: Event) => {
    const { onSubmit } = this.props

    // If submit handler is defined, prevent default behaviour
    if (event && onSubmit) {
      event.preventDefault()
    }

    // serialize state of formelements in object
    const values = serialize(this.el, { hash: true })

    if (onSubmit) {
      onSubmit(event, values)
    }
  }

  onChange = (event: Event) => {
    // serialize state of formelements in object
    const values = serialize(this.el, { hash: true })
    const valueString = JSON.stringify(values)

    if (valueString !== this.state.valueString) {
      this.setState({
        valueString,
        isChanged: true
      })
    }

    this.validateFields()

    // Pass change event to callback if available
    if (this.props.onChange) {
      this.props.onChange(event, values)
    }
  }

  validateFields = () => {
    if (this.el && this.el.elements) {
      // Loop through all form elements and run native checkValidity()
      const isValid = Array.prototype.every.call(this.el.elements, el =>
        el.checkValidity()
      )
      if (this.state.isValid !== isValid) {
        this.setState({
          isValid
        })
      }
    }
  }

  render() {
    const { className, children, method = 'get' } = this.props
    return (
      <form
        className={classNames('Form', className)}
        method={method}
        ref={el => el && (this.el = el)}
      >
        {children}
      </form>
    )
  }
}
