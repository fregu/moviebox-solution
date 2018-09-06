// @flow
import React from 'react'
import classNames from 'classnames'
import Icon from 'components/Icon'
import './index.css'

type Props = {
  className?: string,
  text?: string,
  icon?: string,
  hiddenText?: boolean,
  modifiers?: Array<string>,
  children?: any
}

export default function Button({
  children,
  text,
  icon,
  hiddenText,
  className,
  modifiers = [],
  ...rest
}: Props) {
  const attributes = {
    ...rest
  }
  return (
    <button
      className={classNames(
        'Button',
        className,
        modifiers.map(mod => 'Button--' + mod)
      )}
      {...attributes}
    >
      {icon ? <Icon className="Button-icon" icon={icon} /> : null}
      <span
        className={classNames('Button-text', { 'hidden-text': hiddenText })}
      >
        {text || children}
      </span>
    </button>
  )
}
