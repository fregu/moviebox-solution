// @flow
import React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string,
  modifiers?: Array<string>,
  text?: string,
  level?: string,
  children: any
}

export default function Title({
  level = '2',
  text,
  children,
  className,
  modifiers = []
}: Props) {
  const TagName = `h${level}`
  return (
    <TagName className={classNames('Title', `text--${level}`, className)}>
      <span className="Title-text">{text || children}</span>
    </TagName>
  )
}
