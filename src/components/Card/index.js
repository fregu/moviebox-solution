// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

type Props = {
  className?: string,
  modifiers?: Array<string>,
  children: any
}

export default function Card({ className, children, modifiers = [] }: Props) {
  return (
    <div
      className={classNames(
        'Card',
        className,
        modifiers.map(mod => 'Card--' + mod)
      )}
    >
      {children}
    </div>
  )
}
