import React, { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

import iProject from '../../interfaces/project'
import './Search.css'

type ProjectProps =
  | 'contributor'
  | 'title'
  | 'content'
  | 'place'
  | 'collaborators'
  | 'home'
  | 'tags'
  | 'volume'
// type ProjectPickz = Pick<iProject, ProjectProps>

interface SearchProps {
  projects: iProject[]
  setResults: React.Dispatch<React.SetStateAction<iProject[]>>
  query: string | undefined
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
  searchBlur: () => void
  clearSearch: () => void
}
export default function Search(props: SearchProps) {
  const {
    projects,
    setResults,
    query,
    setQuery,
    searchBlur,
    clearSearch,
  } = props

  // setExactMatchOptions
  const [exactMatchOptions] = useState<{ [key in ProjectProps]: boolean }>({
    contributor: true,
    title: true,
    content: true,
    place: true,
    collaborators: true,
    home: true,
    tags: true,
    volume: true,
  })

  useEffect(() => {
    if (query === '') {
      console.log('query is empty string effect gonna setResults([])!!')
      setResults([])
      return
    }
    query !== undefined && debouncedSearch(query)
  }, [query])

  const debouncedSearch = useCallback(
    debounce((q: string) => search(q), 500),
    []
  )

  function search(q: string | undefined) {
    if (q === undefined) {
      return
    }
    const results = exactMatchSearch(q)
    console.log('search() results:', results)
    setResults(results || [])
  }

  function exactMatchSearch(q: string) {
    const propz: ProjectProps[] = Object.entries(exactMatchOptions).reduce<
      ProjectProps[]
    >((acc, v) => {
      v[1] && acc.push(v[0] as ProjectProps)
      return acc
    }, [])
    if (propz && propz.length === 0) {
      // setResults([])
      console.log('no propz')
      return
    }
    const re = new RegExp(q.replace(/([^a-zA-Z0-9])/g, '\\$1'), 'i')
    // Object.entries(projects)
    return projects.reduce<iProject[]>((acc, v) => {
      for (const prop of propz) {
        // it really might not be a string, sorry tsc :/
        if (re.test(v[prop] as string)) {
          acc.push(v)
          break
        }
      }
      return acc
    }, [])
  }

  return (
    <div className="Search">
      <input
        value={query || ''}
        onChange={(event) => {
          // ah hmm, debounce this?
          setQuery(event.currentTarget.value)
        }}
        onKeyDown={(event) => event.key === 'Enter' && search(query)}
        onBlur={searchBlur}
        placeholder="Search Emergency INDEX"
      />
      <div className="results-count">
        <span>
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </span>
        {query !== undefined && (
          <button
            title="clear search"
            onClick={() => {
              clearSearch()
            }}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  )
}
