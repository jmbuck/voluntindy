import React, { Component } from 'react'
import './UserSiteInfo.css'
import logo from './3_White_logo_on_color1_122x73.png'

class UserSiteInfo extends Component{
    render(){
        return(
            <div className="siteInfo">
                
                <div className="container">
                    <div className="register-info">
                        <p>Sign up to look at volunteer opportunities near you!</p>
                    </div>
                    <div className="credit-info">
                        <p>Once you've successfully volunteered, you'll earn credit that you can redeem for cool things!</p> 
                    </div>
                    <div className="donate-info">
                        <p>Can't volunteer your time because of scheduling conflicts? Donate to your city of Indianapolis and you can redeem credits too!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSiteInfo