import React, { useEffect } from 'react'
import iProject from '../../interfaces/project'
import './Project.css'
import Meta from './Meta'
import Description from './Description'
import Footer from './Footer'

interface ProjectProps {
  project: iProject
  measure?: () => void
  idx?: number
}

export default function Project(props: ProjectProps) {
  const { project, measure, idx } = props

  useEffect(() => {
    project && measure && measure()
  }, [])

  if (!project) {
    return null
  }

  return (
    <article className="Project">
      <div className="flex">
        <header>
          <Meta project={project} />
        </header>
        <section>
          <Description project={project} idx={idx} />
        </section>
      </div>
      <footer className="col s12">
        <Footer project={project} />
      </footer>
    </article>
  )
}
