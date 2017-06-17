import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import UserSiteInfo from './UserSiteInfo'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){

     this.props.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.','')).on('value', (snapshot) => {this.setState({credits: snapshot.val().credits})})
      this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.','')).on('value', (snapshot) => {this.setState({firstName: snapshot.val().firstName})})
      this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.','')).on('value', (snapshot) => {this.setState({lastName: snapshot.val().lastName})})
      } else
        this.setState({firstName: "Not Logged In", lastName: "", credits: 0,})
     })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header firstName={this.state.firstName} lastName={this.state.lastName} credits={this.state.credits}/>
        </div>
        <div className="App-nav">
          <NavBar firebase={this.props.firebase}/>
        </div>
           
      </div>
    );
  }
}

export default App;
