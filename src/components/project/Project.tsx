import React, { Component } from 'react'
import iProject from '../../interfaces/project'
import './Project.css'
import Meta from './Meta'
import Description from './Description'
import Footer from './Footer'

class Project extends Component<{
  project: iProject
  measure?: () => void
  idx?: number
}> {
  render() {
    const { project, measure, idx } = this.props
    if (!project) {
      return null
    }

    return (
      <article className="Project row">
        <div className="flex">
          <header className="col s12 m4">
            <Meta project={project} measure={measure} />
          </header>
          <div className="col s12 m8">
            <Description project={project} idx={idx} />
          </div>
        </div>
        <footer className="col s12">
          <Footer project={project} />
        </footer>
      </article>
    )
  }
}

export default Project
