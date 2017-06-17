import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <SignIn firebase={this.props.firebase} />    
          <SignUp firebase={this.props.firebase} />    
      </div>
    );
  }
}

export default App;
