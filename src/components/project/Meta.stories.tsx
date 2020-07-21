import React from 'react'
import { withKnobs, button } from '@storybook/addon-knobs'

import Meta from './Meta'
import { generateFakeProject } from '../../__test__/projects'

export default {
  title: 'Meta',
  decorators: [withKnobs],
}

export const example = () => {
  let project = generateFakeProject()

  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Meta project={project} />
}
