import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import Button from 'components/Button'

storiesOf('Button', module)
  .add(
    'with text',
    withNotes('A basic button')(() => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    ))
  )
  .add('with plus icon', () => (
    <Button icon="plus" onClick={action('clicked')}>
      Lägg till
    </Button>
  ))
  .add('icon and hiddenText', () => (
    <Button icon="plus" hiddenText onClick={action('clicked')}>
      Lägg till
    </Button>
  ))
