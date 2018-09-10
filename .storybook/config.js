import { configure } from '@storybook/react'
const { resolve } = require('path')
const babelrc = require('../.babelrc')

const req = require.context('src/components/Button', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
