import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {

    signIn(ev) {
        this.props.firebase.auth().signInWithEmailAndPassword(
            document.querySelector('.email').value, document.querySelector('.password').value
        ).catch((e) => {
            alert(e.message);
        })
    }

    render(){
        return(
            <div className="signInForm">
                <p>
                    <input 
                        type="text" 
                        name="userName" 
                        className="email"
                        placeholder="Enter e-mail..." 
                    />
                </p>
                <p>
                    <input 
                        type="password" 
                        name="password" 
                        className="password"
                        placeholder="Enter password..."     
                    />
                </p>
                <button type="button" className="button" onClick={this.signIn.bind()}>Sign In</button>
            </div>   
        )
    }
}

export default SignIn