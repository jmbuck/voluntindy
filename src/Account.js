import React, { Component } from 'react'

class Account extends Component {
    render() {
        return(
            <div className="Account">
                <ul>
                    <li>Name: {`${this.props.firstName} ${this.props.lastName}`}</li>
                    <li>Email: {this.props.email}</li>
                    <li>Your Credits: {this.props.credits}</li>
                </ul>
            </div>
        )
    }
}

export default Account