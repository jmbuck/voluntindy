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
        
      </div>
    );
  }
}

export default App;
