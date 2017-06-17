import React, { Component } from 'react'

class Account extends Component {
    render() {
        return(
            <div className="Account">
                <ul>
                    <li>Your Credits: {this.props.credits}</li>
                </ul>
            </div>
        )
    }
}

export default Account