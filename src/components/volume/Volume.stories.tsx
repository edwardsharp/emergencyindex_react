import React, { useState, useEffect } from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Volume from './Volume'

import { generateFakeProjects } from '../../__test__/projects'
import iProject from '../../interfaces/project'

export default {
  title: 'Volume',
  decorators: [withKnobs],
}

export const example = () => {
  const projectCount = number('project count', 350, { min: 1, max: 10000 })
  const projects = generateFakeProjects(projectCount)
  console.log(`Volume gonna render ${projectCount} projects...`)
  return <Volume projects={projects} />
}

export const withRealData = () => {
  const [projects, setProjects] = useState<iProject[]>([])
  const [loading, setLoading] = useState(true)
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
          console.log('woo have projzzz')
          setProjects(data)
          setLoading(false)
        })
        .catch((e) => {
          console.warn('onoz caught error loading data e:', e)
          setProjects([])
          setLoading(false)
        })
    } else {
      console.log(
        'woo have local projzzz localStoreProjects:',
        localStoreProjects
      )
      setProjects(localStoreProjects)
      setLoading(false)
    }
  }, [])

  return loading ? 'loading' : <Volume projects={projects} />
}
