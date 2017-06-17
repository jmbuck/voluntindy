import React, { Component } from 'react'

class Account extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }
    componentDidMount(){
        if(this.props.firstName != undefined && this.props.lastName != undefined){
            this.setState({name: `Name: ${this.props.firstName} ${this.props.lastName}`})
            this.setState({email: `Email: ${this.props.email}`})
        }else{
            this.setState({name: "Please visit the Log In page to log in."})
            this.setState({email: ''})
        }
    }
    render() {
        return(
            <div className="Account">
                <ul style={{"backgroundColor": "white", "listStyle":"none", "padding":"5px" }}>
                    <li>{`${this.state.name}`}</li>
                    <li>{this.state.email}</li>
                    <li>Your Credits: <span className="material-icons" style={{"fontSize":"14px"}}>account_circle</span> {this.props.credits}</li>
                </ul>
            </div>
        )
    }
}

export default Account