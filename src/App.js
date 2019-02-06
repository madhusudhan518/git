import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import favi from './images/favicon.ico';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={favi} className="App-logo" alt="logo" />
          <p>
            I am on master branch
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Well
          </a>
        </header>
      </div>
    );
  }
}

export default App;
