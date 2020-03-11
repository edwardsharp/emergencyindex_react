import React from 'react'
import { setAddon, storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import JSXAddon from 'storybook-addon-jsx'

import InfiniteProject from './InfiniteProject'

setAddon(JSXAddon)

storiesOf('InfiniteProject', module).addWithJSX('to infinity!', () => (
  <InfiniteProject />
))
