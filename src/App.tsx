import React, { Component } from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Button variant="contained" color="primary">Emergency INDEX</Button>
          </p>
          <a
            className="App-link"
            href="https://alveol.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            😸
          </a>
        </header>
      </div>
    );
  }
}

export default App;
