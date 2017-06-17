import React, { Component } from 'react'
import './VolunteerPage.css'

class VolunteerPage extends Component{
    render(){
        return(
            <div>
                <div className="opportunity-1">
                    <img src="http://indyhub.org/wordpress/wp-content/uploads/2017/05/iWIN_golfouting-300x266.jpg" />
                    <h3 className="v-text">Indy Women in Tech Championship Volunteer</h3>
                    <p className="v-text">The Indy Women in Tech Championship presented by Guggenheim is looking for 700 + Volunteers for its debut at IMS’ Brickyard Crossing Golf Course Sept. 4 – 9, 2017. Volunteers are needed in a variety of roles from being a Marshal on course to helping with Hospitality, and so much more. Volunteering provides a unique opportunity to get close access to the top female golfers in the world, chance to meet new friends, all while supporting a great cause.</p>
                </div>
            </div>
        )
    }
}

export default VolunteerPage