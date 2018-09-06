// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

type Props = {
  className?: string,
  fullWidth?: boolean,
  modifiers?: Array<string>,
  children: any
}

export default function View({
  children,
  fullWidth,
  className,
  modifiers = []
}: Props) {
  return (
    <div
      className={classNames(
        'View',
        { 'layout-container': !fullWidth },
        className,
        modifiers.map(mod => 'View--' + mod)
      )}
    >
      {children}
    </div>
  )
}
