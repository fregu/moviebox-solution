// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

type Props = {
  children: any,
  className?: string,
  modifiers?: Array<string>
}

export default function Gutter({ children, className, modifiers = [] }: Props) {
  return (
    <div
      className={classNames(
        'Gutter',
        className,
        modifiers.map(mod => 'Gutter--' + mod)
      )}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div key={index} className="Gutter-item">
            {child}
          </div>
        ))
      ) : (
        <div className="Gutter-item">{children}</div>
      )}
    </div>
  )
}
