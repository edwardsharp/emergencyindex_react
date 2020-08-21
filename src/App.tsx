import React, { useState, useEffect } from 'react'

import blob from './blob.svg'
import iProject from './interfaces/project'
import './App.css'
import Volume from './components/volume/Volume'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<iProject[]>([])
  useEffect(() => {
    const localStoreProjects = JSON.parse(
      localStorage.getItem('projects') || 'null'
    )

    if (!localStoreProjects) {
      console.log('fetching projects from https://emergencyindex.com/data.json')
      fetch('https://emergencyindex.com/data.json')
        .then((response) => response.json())
        .then((data) => {
          // let _projects = {};
          // data.forEach(function(p) {
          //   _projects[p.url] = { ...p, ref: p.url };
          // })
          // setProjects(_projects);
          try {
            localStorage.setItem('projects', JSON.stringify(data))
          } catch (e) {
            console.warn('caught error in localStorage.setItem e:', e)
          }
          setProjects(data)
        })
        .catch((e) => {
          console.warn('onoz caught error loading data e:', e)
        })
    } else {
      setProjects(localStoreProjects)
    }
    setLoading(false)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div
          style={{ backgroundImage: `url('${blob}'` }}
          className="App-blob"
        />
      ) : (
        <Volume projects={projects} />
      )}
    </div>
  )
}
