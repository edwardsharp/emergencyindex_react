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

// example.story = {
//   parameters: {
//     knobs: {
//       // Doesn't emit events while user is typing.
//       timestamps: true,

//       // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
//       // You can still set it to false, but it's strongly discouraged to set to true in cases when you host your storybook on some route of your main site or web app.
//       escapeHTML: true,
//     },
//   },
// }
