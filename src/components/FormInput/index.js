// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import cuid from 'cuid'
import './index.css'

type Props = {
  className?: string,
  type?: string,
  label?: string,
  id?: string,
  hiddenLabel?: boolean,
  modifiers?: Array<string>,
  defaultValue?: string,
  value?: string,
  options?: Array<{ value: string, text: string }>
}

export default class FormInput extends Component<Props> {
  render() {
    const {
      className,
      type = 'text',
      label,
      hiddenLabel,
      id = `input-${cuid()}`,
      defaultValue = '',
      value,
      options = [],
      modifiers = [],
      ...rest
    } = this.props

    const attributes = {
      className: 'FormInput-input',
      id,
      value,
      ...rest
    }

    const isInput =
      type !== 'select' ||
      type !== 'textarea' ||
      type !== 'radio' ||
      type !== 'checkbox' ||
      type !== 'hidden'

    return (
      <div
        className={classNames(
          'FormInput',
          `FormInput-${type}`,
          className,
          modifiers.map(mod => 'FormInput--' + mod)
        )}
      >
        {type === 'hidden' ? (
          <input type="hidden" {...attributes} value={defaultValue || value} />
        ) : null}
        {type === 'radio' || type === 'checkbox' ? (
          <input {...attributes} type={type} />
        ) : null}
        {label ? (
          <label
            className={classNames('FormInput-label', {
              'hidden-text': hiddenLabel
            })}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null}
        {type === 'select' ? (
          <select {...attributes}>
            {options.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        ) : null}
        {type === 'textarea' ? (
          <textarea {...attributes}>{defaultValue}</textarea>
        ) : null}
        {isInput ? (
          <input
            {...attributes}
            id={id}
            defaultValue={defaultValue}
            type={type}
          />
        ) : null}
      </div>
    )
  }
}
