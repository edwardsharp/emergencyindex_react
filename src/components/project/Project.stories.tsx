import React from 'react'
import { withKnobs, button } from '@storybook/addon-knobs'

import Project from './Project'
import { generateFakeProject } from '../../__test__/projects'

export default {
  title: 'Project',
  decorators: [withKnobs],
}

export const example = () => {
  let project = generateFakeProject()

  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Project project={project} />
}
