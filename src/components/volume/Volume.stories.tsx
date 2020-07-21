import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Volume from './Volume'

import { generateFakeProjects } from '../../__test__/projects'

export default {
  title: 'Volume',
  decorators: [withKnobs],
}

export const example = () => {
  const projectCount = number('project count', 350, { min: 1, max: 10000 })
  const projects = generateFakeProjects(projectCount)
  console.log(`Volume gonna render ${projectCount} projects...`)
  return <Volume projects={projects} />
}
