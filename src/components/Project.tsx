import React, { Component } from 'react';
import iProject from '../interfaces/project'

class Project extends Component<{ project: iProject }> {
  render() {
    const { project } = this.props
    return (
      <article className='row'>
        <header className="col s12 m4 project-info">
          {project.image && (
            <>
              {/* `/assets/img/${project.volume}/${project.image}` */}
              <img src={project.image} className="materialboxed project-img" data-caption={`photo: ${project.photo_credit && project.photo_credit.replace('Photo credit: ', '')}`} alt="project image" />
              <div className="photo-credit truncate">{`${project.photo_credit && project.photo_credit.replace('Photo credit: ', '')}`}</div>
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

          <h6 className="contributor">
            {project.contributor}
          </h6>

          <p className="project-collaborators">
            {project.collaborators && project.collaborators.join(', ')}
          </p>

          <p className="home">
            {project.home}
            <br />
            {project.contact}

            {project.links && project.links.map(link => {
              const l = link.match('http://') || link.match('https://') ? link : `http://${link}`
              return (<>
                <br />
                <a href={l} target="_blank" rel="noopener noreferrer">{l}</a>
              </>)
            })}
          </p>

          {project.footnote}

        </header>
        <div className="col s12 m8 right-panel">
          <h5 className="title">
            <strong>{project.title}</strong>
          </h5>

          <h6 className="contributor">{project.contributor}</h6>

          <div className="description">
            {project.description.split('\n').map(p => <p>{p}</p>)}
          </div>


        </div>
        <footer className="col s12">
          <a className="waves-effect waves-light btn btn-flat chip tooltipped" data-tooltip="Edit This Project on GitHub" data-position="top" href={`https://github.com/emergencyindex/projects-${project.volume}/blob/projects/${project.pages}.md`} target="_blank">
            <i className="material-icons">edit</i>
          </a><br />
          <a className="waves-effect waves-light btn btn-flat chip tooltipped" data-tooltip="Permanent link to this project" data-position="top" href={project.url ? project.url : '#'}>
            <i className="material-icons">link</i>
          </a><br />

          {project.tags && (
            <ul>
              {project.tags.map(tag => (
                <li><a className="waves-effect waves-light btn btn-flat modal-trigger chip" href={`#modal${project.pages}`} data-tag={tag}>{tag}</a></li>
              ))}
            </ul>
          )}
        </footer>
      </article>
    );
  }
}

export default Project;
