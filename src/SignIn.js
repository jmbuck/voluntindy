import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {

    signIn(ev) {
        const auth = this.props.firebase.auth();
        auth.signInWithEmailAndPassword(
            document.querySelector('.signInForm .email').value, document.querySelector('.signInForm .password').value
        ).then(() => window.location.reload()).catch((e) => {
            alert(e.message);
        })

        this.getCredits(auth.currentUser);
    }

    getCredits(user) {
        const userId = user.uid;
        this.props.firebase.database().ref('/users/'+userId).on('value', (snapshot) => {this.props.credits(snapshot.val().credits)})
    }

    render(){
        return(

            <div className="signInForm">
                <div>
                    <input 
                        type="text" 
                        name="userName" 
                        className="email"
                        placeholder="Enter e-mail..." 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        className="password"
                        placeholder="Enter password..."     
                    />
                </div>
                <button type="button" className="button" onClick={this.signIn.bind(this)}>Sign In</button>
            </div>   
        )
    }
}

export default SignIn