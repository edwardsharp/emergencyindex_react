import React, { Component } from 'react';
import Button from './components/Button';
import blob from './blob.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{backgroundImage: `url('${blob}'`}} className="App-blob" />
          <p>
            <Button variant="contained" color="primary" href={window.location.host.match(/localhost/) ? 'http://localhost:9009' : 'https://edwardsharp.github.io/emergencyindex_react/index.html'}>storybook 📓</Button>
          </p>
          <Button variant="contained" href="https://github.com/emergencyindex/">emergencyINDEX on github 😸</Button>
        </header>
      </div>
    );
  }
}

export default App;
