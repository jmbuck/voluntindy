import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {

    signIn(ev) {
        const auth = this.props.firebase.auth();
        auth.signInWithEmailAndPassword(
            document.querySelector('.signInForm .email').value, document.querySelector('.signInForm .password').value
        ).catch((e) => {
            alert(e.message);
        })

        this.getCredits(auth.currentUser);
    }

    getCredits(user) {
        const userId = user.uid;
        let credits;
        this.props.firebase.database().ref('/users/'+userId).on('value', (snapshot) => {credits = snapshot.val().credits})
        console.log(credits);
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