import React, { Component } from 'react'
import blob from './blob.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{ backgroundImage: `url('${blob}'` }}
            className="App-blob"
          />
          <p>
            <button
              onClick={() =>
                (window.location.href = window.location.host.match(/localhost/)
                  ? 'http://localhost:9009'
                  : 'https://edwardsharp.github.io/emergencyindex_react/index.html')
              }
            >
              storybook{' '}
              <span role="img" aria-label="book">
                📓
              </span>
            </button>
          </p>
          <button
            onClick={() =>
              (window.location.href = 'https://github.com/emergencyindex/')
            }
          >
            emergencyINDEX on github{' '}
            <span role="img" aria-label="smile cat">
              😸
            </span>
          </button>
        </header>
      </div>
    )
  }
}

export default App
