import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.sdsdsd
        </p>
      </div>
    );
  }
}

export default hot(module)(App)