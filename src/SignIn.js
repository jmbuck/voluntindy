import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {
    render(){
        return(
           //console.log('Sign In, man.')
            <div className="signInForm">
                <form>
                    <p>
                        <input 
                            type="text" 
                            name="userName" 
                            placeholder="Enter username..." 
                        />
                    </p>
                    <p>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password..."     
                        />
                    </p>
                </form>
            </div>   
        )
    }
}

export default SignIn