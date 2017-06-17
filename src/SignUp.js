import React, { Component } from 'react'

class SignUp extends Component {

    signUp(ev) {
        const auth = this.props.firebase.auth()
        auth.createUserWithEmailAndPassword(
            document.querySelector('.signUpForm .email').value, document.querySelector('.signUpForm .password').value).then(
                ()=>this.setCredits(auth.currentUser)).catch(function(error) {
        // Handle Errors here.
        alert(error.message);  
        });
        //console.log(auth.currentUser.email);
        //this.setCredits(auth.currentUser)

    }

    setCredits(user) {
        console.log(user.email);
        const userId = user.uid;
        this.props.firebase.database().ref('users/' + userId).set({
            credits: 5,
        });
    }

    render(){
        return(
            <div className="signUpForm">
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
                    <button type="button" className="button" onClick={this.signUp.bind(this)}>Sign Up</button>
            </div>   
        )
    }
}

export default SignUp