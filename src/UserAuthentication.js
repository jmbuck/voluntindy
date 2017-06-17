import React, { Component } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

class UserAuthentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signIn: 'SignIn',
            signUp: 'SignUp hide',
        }
    }

    signUp() {
        this.setState({
            signIn: 'SignIn hide',
            signUp: 'SignUp'
        })
    }

    render() {
        return ( 
            <div>
                <div className={this.state.signIn}>
                    <SignIn firebase={this.props.firebase}/>
                </div>
                <div className={this.state.signUp}>
                    <SignUp firebase={this.props.firebase}/>
                </div>
                <a className={`${this.state.signIn}`} onClick={this.signUp.bind(this)} style={{color: 'blue'}}><u>Create an account</u></a>
            </div>
        )
    }
}

export default UserAuthentication