import React from 'react'

import './Meta.css'
import iProject from '../../interfaces/project'

export default function Meta(props: {
  project: iProject
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
  measure?: () => void
}) {
  const { project, setQuery } = props

  const imgSrc = project.image?.startsWith('http')
    ? project.image
    : `https://emergencyindex.com/assets/img/${project.volume}/${project.image}`
  return (
    <div className="Meta">
      {imgSrc && (
        <>
          {/* `/assets/img/${project.volume}/${project.image}` */}
          <img
            src={imgSrc}
            className="project-img"
            data-caption={`photo: ${
              project.photo_credit &&
              project.photo_credit.replace('Photo credit: ', '')
            }`}
            alt="project"
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
        <span className="first_performed">
          {project.volume?.toString() === '2011' && 'first performed on '}
          {project.first_performed}
        </span>

        <span
          className="place hotlink"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setQuery(project.place)
          }}
        >
          {project.place}
        </span>

        <br />
        {project.times_performed}
      </p>

      <h6
        className="contributor hotlink"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setQuery(project.contributor)
        }}
      >
        {project.contributor}
      </h6>

      <p className="project-collaborators">
        {project.collaborators &&
          project.collaborators.map((collaborator, i) => (
            <span key={i}>
              <span
                className="hotlink"
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  setQuery(collaborator)
                }}
              >
                {collaborator}
              </span>
              {project.collaborators &&
                i < project.collaborators.length - 1 &&
                ', '}
            </span>
          ))}
      </p>

      <p
        className="home hotlink"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setQuery(project.home)
        }}
      >
        {project.home}
      </p>

      <div>
        <div className="contact">{project.contact}</div>
        {project.links && (
          <div className="links">
            {project.links.map((link) => {
              const l =
                link.match('http://') || link.match('https://')
                  ? link
                  : `http://${link}`
              return (
                <span key={l}>
                  <a
                    href={l}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {l}
                  </a>
                  <br />
                </span>
              )
            })}
          </div>
        )}
      </div>

      {project.footnote}
    </div>
  )
}
