import React from 'react'
import { withKnobs, button } from '@storybook/addon-knobs'

import Description from './Description'
import { generateFakeProject } from '../../__test__/projects'

export default {
  title: 'Description',
  decorators: [withKnobs],
}

export const example = () => {
  let project = generateFakeProject()

  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Description project={project} />
}
