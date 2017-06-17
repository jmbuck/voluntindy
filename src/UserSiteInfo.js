import React, { Component } from 'react'
import './UserSiteInfo.css'
import logo from './3_White_logo_on_color1_122x73.png'

class UserSiteInfo extends Component{
    render(){
        return(
            <div className="siteInfo">
                <h1>Welcome to <span>Voluntindy</span>!</h1>
                <h2>Where you can get credit for volunteering!!</h2>
            </div>
        )
    }
}

export default UserSiteInfo