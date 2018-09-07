// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

type CellProps = {
  widths: {
    ''?: string,
    s?: string,
    m?: string,
    l?: string
  },
  children: any
}
type GridProps = {
  className?: string,
  withGap?: boolean,
  modifiers?: Array<string>,
  widths?: {
    ''?: string,
    s?: string,
    m?: string,
    l?: string
  },
  children: any
}

export const GridCell = ({ widths = {}, children }: CellProps) => (
  <div
    className={classNames(
      'Grid-cell',
      Object.keys(widths).map(
        key => `${key && `${key}-`}width-${widths[key] || ''}`
      )
    )}
  >
    {children}
  </div>
)

export default function Grid({
  className,
  withGap,
  modifiers = [],
  widths = {},
  children
}: GridProps) {
  return (
    <div
      className={classNames(
        'Grid',
        className,
        {
          'Grid--withGap': withGap
        },
        modifiers.map(mod => `Grid--${mod}`)
      )}
    >
      {[...((Array.isArray(children) && children) || [children])].map(
        (child, index) =>
          child.type.name !== 'GridCell' ? (
            <GridCell
              key={`cell-${index}`}
              widths={child.props.widths || widths}
            >
              {child}
            </GridCell>
          ) : (
            child
          )
      )}
    </div>
  )
}
