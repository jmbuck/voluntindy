import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import UserSiteInfo from './UserSiteInfo'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-nav">
          <NavBar firebase={this.props.firebase}/>
        </div>
           
      </div>
    );
  }
}

export default App;
