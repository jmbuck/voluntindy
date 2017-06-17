import React, { Component } from 'react'

class SignUp extends Component {

    signUp(ev) {
        const formInfo = {
            firstName: document.querySelector('.firstName'),
            lastName: document.querySelector('.lastName'),
            password: document.querySelector('.signUpForm .password'),
            confirm: document.querySelector('.confirmPassword'),
            email: document.querySelector('.email'),
        }

        if(formInfo.confirm.value === formInfo.password.value) {
             const auth = this.props.firebase.auth()
            auth.createUserWithEmailAndPassword(
            document.querySelector('.signUpForm .email').value, document.querySelector('.signUpForm .password').value).then(
                ()=>this.setCredits(auth.currentUser, formInfo)).catch(function(error) {
                alert(error.message);  
                });
        } else {
            formInfo.password.value = '';
            formInfo.confirm.value = '';
            formInfo.password.focus();
            alert('Your passwords did not match! Try again.');
        }
       
        //console.log(auth.currentUser.email);
        //this.setCredits(auth.currentUser)

    }

    setCredits(user, formInfo) {
        console.log(formInfo.firstName.value);
        const userId = user.uid;
        this.props.firebase.database().ref('users/' + userId).set({
            credits: 1,
            firstName: formInfo.firstName.value,
            lastName: formInfo.lastName.value,
        });
    }

    render(){
        return(
            <div className="signUpForm">
                     <div>
                        <input 
                            type="text" 
                            name="firstName" 
                            className="firstName"
                            placeholder="First Name"     
                        />
                    </div>
                     <div>
                        <input 
                            type="text" 
                            name="lastName" 
                            className="lastName"
                            placeholder="Last Name"     
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="userName" 
                            className="email"
                            placeholder="E-mail" 
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            className="password"
                            placeholder="Password"     
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            className="confirmPassword"
                            placeholder="Confirm password"     
                        />
                    </div>
                    <button type="button" className="button" onClick={this.signUp.bind(this)}>Sign Up</button>
            </div>   
        )
    }
}

export default SignUp