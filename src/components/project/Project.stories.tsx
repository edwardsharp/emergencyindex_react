import React, { useEffect } from 'react'
import { withKnobs, button, number } from '@storybook/addon-knobs'
import faker from 'faker'

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
  return <Project project={project} setQuery={() => {}} />
}

export const meta = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Meta project={project} setQuery={() => {}} />
}

export const description = () => {
  let project = generateFakeProject()
  button('randomize project text', () => {
    project = generateFakeProject()
  })
  return <Description project={project} />
}

function FooterStory(props: { tagCount: number }) {
  const { tagCount } = props

  function tags(): string[] {
    return Array.from({ length: tagCount }, () =>
      faker.random.arrayElement([
        faker.hacker.adjective(),
        faker.hacker.verb(),
        faker.hacker.noun(),
      ])
    )
  }

  let project = { content: '', tags: tags() }

  useEffect(() => {
    project.tags = tags()
  }, [tagCount])

  return (
    <div style={{ marginTop: '1em' }}>
      <Footer project={project} setQuery={() => {}} />
    </div>
  )
}

export const footer = () => {
  const tagCount = number('tag count', 10)

  return <FooterStory tagCount={tagCount} />
}
