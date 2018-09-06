import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from 'components/Icon'

const icons = [
  'cross',
  'filter',
  'expand',
  'plus',
  'check',
  'chevronUp',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'broken',
  'empty',
  'search'
]
storiesOf('Icon', module).add('iconset', () => (
  <div>
    {icons.map(name => (
      <Icon title={name} large key={name} icon={name} />
    ))}{' '}
  </div>
))
