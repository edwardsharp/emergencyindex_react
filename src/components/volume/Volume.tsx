import React, { useState, useRef, useCallback, useEffect } from 'react'
import { List, ListRowProps } from 'react-virtualized'
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

  const maxWidth = windowSize.width > 500 ? 500 : windowSize.width
  const tocWidth = searchFocused ? maxWidth : 60
  const searchWidth = tocWidth > 60 ? maxWidth : 185
  const minHeight =
    windowSize.width < 600 ? windowSize.height * 2.5 : windowSize.height * 1.5 // ~100vh

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
    tocRef.current?.scrollToRow(currentProjectIdx)
  }, [currentProjectIdx])

  useEffect(() => {
    setShowSideNav(windowSize.width > 600)
  }, [windowSize])

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
    const { index, isVisible, style } = props

    if (isVisible) {
      dSetCurrentProjectIdx(index)
    }

    return (
      <div style={style}>
        <Project
          measure={() => {}}
          project={projects[index]}
          setQuery={setQuery}
          idx={index}
        />
      </div>
    )
  }

  return (
    <div className="Volume">
      <div className="Projects">
        <List
          height={windowSize.height}
          width={windowSize.width - 8 - (showSideNav ? tocWidth : 0)}
          rowCount={projects.length}
          rowHeight={minHeight}
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
            width: searchWidth,
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
