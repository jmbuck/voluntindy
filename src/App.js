import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import UserSiteInfo from './UserSiteInfo'

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar firebase={this.props.firebase}/>
        </div>
        <div className="Website-info">
          <UserSiteInfo />
        </div>
           
      </div>
    );
  }
}

export default App;
