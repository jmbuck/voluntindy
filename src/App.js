import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
