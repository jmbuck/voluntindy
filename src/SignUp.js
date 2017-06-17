import React, { Component } from 'react'

class SignUp extends Component {

    signUp(ev) {
        this.props.firebase.auth().createUserWithEmailAndPassword(
            document.querySelector('.email').value, document.querySelector('.password').value).catch(function(error) {
        // Handle Errors here.
        alert(error.message);
    });
        
    }

    render(){
        return(
            <div className="signUpForm">
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
                    <button type="button" className="button" onClick={this.signUp.bind(this)}>Sign Up</button>
            </div>   
        )
    }
}

export default SignUp