import React, { useState, useRef, useCallback, useEffect } from 'react'
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
} from 'react-virtualized'
import debounce from 'lodash.debounce'

import useWindowSize from '../useWindowSize'
import iProject from '../../interfaces/project'
import Project from '../project/Project'
import './Volume.css'

interface TOCProps {
  project: iProject
  idx: number
  currentIdx: number
  projectsRef: React.RefObject<List>
}

function TOC(props: TOCProps) {
  const { idx, project, currentIdx, projectsRef } = props

  function tocRowClick(idx: number) {
    projectsRef.current?.scrollToRow(idx)
    // well, need some time to measure all this :/
    window.setTimeout(() => projectsRef.current?.scrollToRow(idx), 0)
    window.setTimeout(() => projectsRef.current?.scrollToRow(idx), 750)
  }

  return (
    <div
      className="TOCRow"
      style={{
        borderLeft: `${currentIdx === idx ? '5px solid white' : 'none'}`,
      }}
      onClick={() => tocRowClick(idx)}
      title={`${project.pages} ${project.title} -- ${project.contributor}`}
    >
      <div>{project.title}</div>
      <div>{project.contributor}</div>
    </div>
  )
}

interface VolumeProps {
  projects: iProject[]
}

function Volume(props: VolumeProps) {
  const { projects } = props

  const windowSize = useWindowSize()
  const [showSideNav, setShowSideNav] = useState(() => windowSize.width > 600)

  const projectsRef = useRef<List>(null)
  const tocRef = useRef<List>(null)

  const [currentProjectIdx, setCurrentProjectIdx] = useState(0)

  const dSetCurrentProjectIdx = useCallback(
    debounce((i: number) => setCurrentProjectIdx(i), 500),
    []
  )

  useEffect(() => {
    console.log(
      'currentProjectIdx effect! currentProjectIdx:',
      currentProjectIdx
    )
    tocRef.current?.scrollToRow(currentProjectIdx)
  }, [currentProjectIdx])

  useEffect(() => {
    setShowSideNav(windowSize.width > 600)
  }, [windowSize])

  const cache = new CellMeasurerCache({
    defaultHeight: windowSize.height,
    fixedWidth: true,
  })

  function tocRowRenderer(props: ListRowProps) {
    const { index, key, style } = props
    return (
      <div style={style} key={key}>
        <TOC
          project={projects[index]}
          idx={index}
          currentIdx={currentProjectIdx}
          projectsRef={projectsRef}
        />
      </div>
    )
  }

  function projectRowRenderer(props: ListRowProps) {
    const { index, isVisible, key, parent, style } = props

    if (isVisible) {
      console.log(index, 'isVisible!')
      dSetCurrentProjectIdx(index)
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        {({ measure }) => (
          // do we need to registerChild, here? like registerChild() or ref={registerChild}
          // 'style' attribute required to position cell (within parent List)
          <div style={style}>
            <Project
              measure={() => isVisible && measure()}
              project={projects[index]}
              idx={index}
            />
          </div>
        )}
      </CellMeasurer>
    )
  }

  return (
    <div className="Volume">
      <div className="Projects">
        <List
          height={windowSize.height}
          width={windowSize.width - 8 - (showSideNav ? 200 : 0)}
          rowCount={projects.length}
          deferredMeasurementCache={cache}
          rowHeight={cache.rowHeight}
          rowRenderer={projectRowRenderer}
          scrollToAlignment="start"
          ref={projectsRef}
        />
      </div>
      <div
        className="TOC"
        style={showSideNav ? undefined : { display: 'none' }}
      >
        <List
          height={windowSize.height}
          width={200}
          rowCount={projects.length}
          rowHeight={50}
          scrollToAlignment="center"
          rowRenderer={tocRowRenderer}
          ref={tocRef}
        />
      </div>
    </div>
  )
}

export default Volume
