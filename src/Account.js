import React, { Component } from 'react'
import './Account.css'

class Account extends Component {
    render() {
        return(
            <div className="Account">
                <ul style={{"backgroundColor": "white", "listStyle":"none", "padding":"5px" }}>
                    <li>Name: {`${this.props.firstName} ${this.props.lastName}`}</li>
                    <li>Email: {this.props.email}</li>
                    <li>Your Credits: <span className="material-icons" style={{"fontSize":"14px"}}>account_circle</span> {this.props.credits}</li>
                </ul>
            </div>
        )
    }
}

export default Account