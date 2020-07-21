import React from 'react'

import './Meta.css'
import iProject from '../../interfaces/project'

export default function Meta(props: {
  project: iProject
  measure?: () => void
}) {
  const { project, measure } = props
  return (
    <div className="Meta">
      {project.image && (
        <>
          {/* `/assets/img/${project.volume}/${project.image}` */}
          <img
            src={project.image}
            className="materialboxed project-img"
            data-caption={`photo: ${
              project.photo_credit &&
              project.photo_credit.replace('Photo credit: ', '')
            }`}
            alt="project"
            onLoad={measure}
          />
          <div className="photo-credit truncate">{`${
            project.photo_credit &&
            project.photo_credit.replace('Photo credit: ', '')
          }`}</div>
        </>
      )}

      <h5 className="title">
        <strong>{project.title}</strong>
      </h5>

      <p>
        {project.volume === '2011' && 'first performed on '}
        {project.first_performed}
        <br />
        {project.place}
        <br />
        {project.times_performed}
      </p>

      <h6 className="contributor">{project.contributor}</h6>

      <p className="project-collaborators">
        {project.collaborators && project.collaborators.join(', ')}
      </p>

      <p className="home">
        {project.home}
        <br />
        {project.contact}

        {project.links &&
          project.links.map((link) => {
            const l =
              link.match('http://') || link.match('https://')
                ? link
                : `http://${link}`
            return (
              <span key={l}>
                <br />
                <a href={l} target="_blank" rel="noopener noreferrer">
                  {l}
                </a>
              </span>
            )
          })}
      </p>

      {project.footnote}
    </div>
  )
}