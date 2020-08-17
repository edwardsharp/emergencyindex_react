import React from 'react'

import './Description.css'
import iProject from '../../interfaces/project'

export default function Description(props: {
  project: iProject
  idx?: number
}) {
  const { project } = props
  return (
    <div className="Description">
      <h5 className="title">
        <strong>
          {project.title} {props.idx}
        </strong>
      </h5>

      <h6 className="contributor">{project.contributor}</h6>

      <div className="content">
        {project.content.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
