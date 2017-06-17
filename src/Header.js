import React, { Component } from 'react'
import './Header.css'
import logo from './3_White_logo_on_color1_122x73.png'

class Header extends Component{
    render(){
        return(
            <div>
                <div className="Header">
                    <img src={ logo } />
                    <h1><span>Voluntindy</span>: Where you can get credit for volunteering</h1>
                </div>

                <div className="accountInfo">
                    Hello, {this.props.firstName} {this.props.lastName}. Credits: <span className="material-icons" style={{"fontSize":"14px"}}>account_circle</span> {this.props.credits}
                </div>
            </div>
        )
    }
}

export default Header