import React from 'react'
import { storiesOf } from '@storybook/react'

const colorStyle = {
  display: 'inline-block',
  width: '100px',
  height: '100px',
  aligntext: 'center',
  border: '5px solid',
  margin: '5px',
  padding: '5px'
}
storiesOf('Base', module).add('palette', () => (
  <div>
    <div style={colorStyle} className="color-red">
      color-red
    </div>
  </div>
))
