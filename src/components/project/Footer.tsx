import React from 'react'

import './Footer.css'
import iProject from '../../interfaces/project'

export default function Footer(props: { project: iProject }) {
  const { project } = props
  return (
    <div className="Footer">
      <a
        className="waves-effect waves-light btn btn-flat chip tooltipped"
        data-tooltip="Edit This Project on GitHub"
        data-position="top"
        href={`https://github.com/emergencyindex/projects-${project.volume}/blob/projects/${project.pages}.md`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="material-icons">edit</i>
      </a>
      <a
        className="waves-effect waves-light btn btn-flat chip tooltipped"
        data-tooltip="Permanent link to this project"
        data-position="top"
        href={project.url ? project.url : '#'}
      >
        <i className="material-icons">link</i>
      </a>

      {project.tags && (
        <ul>
          {project.tags.map((tag, idx) => (
            <li key={`${tag}${idx}`}>
              <a
                className="waves-effect waves-light btn btn-flat modal-trigger chip"
                href={`#modal${project.pages}`}
                data-tag={tag}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
