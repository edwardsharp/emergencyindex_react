import React, { useEffect } from 'react'
import iProject from '../../interfaces/project'
import './Project.css'
import Meta from './Meta'
import Description from './Description'
import Footer from './Footer'

interface ProjectProps {
  project: iProject
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
  measure?: () => void
  idx?: number
}

export default function Project(props: ProjectProps) {
  const { project, setQuery, measure, idx } = props

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
          <Meta project={project} setQuery={setQuery} />
        </header>
        <section>
          <Description project={project} idx={idx} />
        </section>
      </div>
      <footer className="col s12">
        <Footer project={project} setQuery={setQuery} />
      </footer>
    </article>
  )
}
