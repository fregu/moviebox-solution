import { configure } from '@storybook/react'

const req = require.context('../src/', true, /stor(y|ies)\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
