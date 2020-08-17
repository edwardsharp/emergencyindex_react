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
import Search from './Search'

interface TOCProps {
  project: iProject
  idx: number
  currentIdx: number
  projectsRef: React.RefObject<List>
  searchFocused: boolean
  showSideNav: boolean
}

function TOC(props: TOCProps) {
  const {
    idx,
    project,
    currentIdx,
    projectsRef,
    searchFocused,
    showSideNav,
  } = props

  function tocRowClick(idx: number) {
    projectsRef.current?.scrollToRow(idx)
    // well, need some time to measure all this :/
    window.setTimeout(() => projectsRef.current?.scrollToRow(idx), 100)
    window.setTimeout(() => projectsRef.current?.scrollToRow(idx), 1000)
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
      {searchFocused ? (
        <>
          <div>
            {project.volume} {project.pages}
          </div>
          <div>{project.title}</div>
          <div>{project.contributor}</div>
        </>
      ) : (
        <span>{project.pages}</span>
      )}
    </div>
  )
}

interface VolumeProps {
  projects: iProject[]
}

function Volume(props: VolumeProps) {
  const windowSize = useWindowSize()
  const [showSideNav, setShowSideNav] = useState(() => windowSize.width > 600)
  const [searchFocused, setSearchFocused] = useState(false)

  const tocWidth: 500 | 60 = searchFocused ? 500 : 60

  const projectsRef = useRef<List>(null)
  const tocRef = useRef<List>(null)

  const [projects, setResults] = useState<iProject[]>(() => props.projects)
  const [query, setQuery] = useState<string | undefined>(undefined)
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0)

  const dSetCurrentProjectIdx = useCallback(
    debounce((i: number) => setCurrentProjectIdx(i), 500),
    []
  )

  useEffect(() => {
    // console.log(
    //   'currentProjectIdx effect! currentProjectIdx:',
    //   currentProjectIdx
    // )
    tocRef.current?.scrollToRow(currentProjectIdx)
  }, [currentProjectIdx])

  useEffect(() => {
    setShowSideNav(windowSize.width > 600)
  }, [windowSize])

  const cache = new CellMeasurerCache({
    defaultHeight: windowSize.height,
    fixedWidth: true,
  })

  function searchClear() {
    console.log('gonna searchClear!!!')
    setQuery(undefined)
    setResults(props.projects)
  }

  function searchFocus() {
    setSearchFocused(true)
  }

  function searchBlur() {
    setSearchFocused(false)
    if (projects.length === 0) {
      setResults(props.projects)
    }
  }

  function tocRowRenderer(props: ListRowProps) {
    const { index, key, style } = props
    return (
      <div style={style} key={key}>
        <TOC
          project={projects[index]}
          idx={index}
          currentIdx={currentProjectIdx}
          projectsRef={projectsRef}
          searchFocused={searchFocused}
          showSideNav={showSideNav}
        />
      </div>
    )
  }

  function projectRowRenderer(props: ListRowProps) {
    const { index, isVisible, key, parent, style } = props

    if (isVisible) {
      // console.log(index, 'isVisible!')
      dSetCurrentProjectIdx(index)
    }

    const pKey = projects[index]
      ? `${projects[index].volume}${projects[index].pages}`
      : key

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={pKey}
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
              setQuery={setQuery}
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
          width={windowSize.width - 8 - (showSideNav ? tocWidth : 0)}
          rowCount={projects.length}
          deferredMeasurementCache={cache}
          rowHeight={cache.rowHeight}
          rowRenderer={projectRowRenderer}
          scrollToAlignment="start"
          ref={projectsRef}
        />
      </div>
      <div className="TOC">
        <Search
          projects={projects}
          query={query}
          setQuery={setQuery}
          setResults={setResults}
          searchFocus={searchFocus}
          searchBlur={searchBlur}
          searchClear={searchClear}
          style={{
            width:
              tocWidth > 60
                ? windowSize.width > 500
                  ? '500px'
                  : windowSize.width
                : '185px',
          }}
        />

        {(showSideNav || searchFocused) && (
          <div className="TOCListWrapper">
            <List
              height={windowSize.height - 50}
              width={tocWidth}
              rowCount={projects.length}
              rowHeight={50}
              scrollToAlignment="center"
              rowRenderer={tocRowRenderer}
              ref={tocRef}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Volume
