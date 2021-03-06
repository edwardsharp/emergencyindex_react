import React from 'react'

import './Footer.css'
import iProject from '../../interfaces/project'

interface FooterProps {
  project: iProject
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Footer(props: FooterProps) {
  const { project, setQuery } = props
  return (
    <div className="Footer">
      {/* <div>
        <a
          data-tooltip="Edit This Project on GitHub"
          data-position="top"
          href={`https://github.com/emergencyindex/projects-${project.volume}/blob/projects/${project.pages}.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="material-icons">edit</i>
        </a>
        <a
          data-tooltip="Cite this project"
          data-position="top"
          href={project.url ? project.url : '#'}
        >
          <i className="material-icons">cite</i>
        </a>
        <a
          data-tooltip="Permanent link to this project"
          data-position="top"
          href={project.url ? project.url : '#'}
        >
          <i className="material-icons">link</i>
        </a>
      </div> */}

      {project.tags && (
        <ul>
          {project.tags.map((tag, idx) => (
            <li key={`${tag}${idx}`}>
              <a
                className="hotlink chip"
                href="#"
                data-tag={tag}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  setQuery(tag)
                }}
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
