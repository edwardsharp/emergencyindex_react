import React from 'react'
import { withKnobs, button } from '@storybook/addon-knobs'

import Project from './Project'
import Meta from './Meta'
import Description from './Description'
import Footer from './Footer'

import { generateFakeProject } from '../../__test__/projects'

export default {
  title: 'Project',
  decorators: [withKnobs],
}

export const project = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Project project={project} />
}

export const meta = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Meta project={project} />
}

export const description = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Description project={project} />
}

export const footer = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Footer project={project} />
}
