import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
<<<<<<< HEAD
import UserSiteInfo from './UserSiteInfo'
=======
import SignIn from './SignIn'
import SignUp from './SignUp'
>>>>>>> 227229140f671bdb3a7b1f27bf94b906d68fc1ae

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <div className="App-header">
          <NavBar />
        </div>
        <div className="Website-info">
          <UserSiteInfo />
        </div>
=======
          <NavBar firebase={this.props.firebase}/> 
>>>>>>> 227229140f671bdb3a7b1f27bf94b906d68fc1ae
      </div>
    );
  }
}

export default App;
