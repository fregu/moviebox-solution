// @flow
import React from 'react'
import classNames from 'classnames'
import './index.css'

import cross from 'assets/icons/x.svg'
import filter from 'assets/icons/filter.svg'
import expand from 'assets/icons/expand.svg'
import plus from 'assets/icons/add.svg'
import check from 'assets/icons/checkmark.svg'
import search from 'assets/icons/search.svg'
import chevronRight from 'assets/icons/chevron-right.svg'
import chevronLeft from 'assets/icons/chevron-left.svg'
import chevronUp from 'assets/icons/chevron-up.svg'
import chevronDown from 'assets/icons/chevron-down.svg'
import empty from 'assets/icons/empty.svg'
import broken from 'assets/icons/broken.svg'

type Props = {
  icon: string,
  large?: boolean,
  className?: string,
  modifiers?: Array<string>,
  title?: string
}
const icons = {
  cross,
  filter,
  expand,
  plus,
  check,
  chevronUp,
  chevronDown,
  chevronLeft,
  chevronRight,
  broken,
  empty,
  search
}

export default function Icon({
  icon,
  large,
  className,
  modifiers = [],
  title
}: Props) {
  return icons[icon] ? (
    <span
      className={classNames(
        'Icon',
        className,
        { 'Icon--large': large },
        modifiers.map(mod => 'Icon--' + mod)
      )}
      title={title}
      role="presentational"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  ) : null
}
