import React from 'react'
import './Opportunity.css'

const Opportunity = (props) => {
    return (
        <li className="opportunity">
            <p className="opp-li"><span>Title:</span> {props.opp.title}</p>
            <p className="opp-li"><span>Description:</span> {props.opp.description}</p>
            <p className="opp-li"><span>Location:</span> {props.opp.location}</p>
            <p className="opp-li"><span>Date:</span> {props.opp.date}</p>
            <p className="opp-li"><span>Time:</span> {props.opp.time}</p>
            <p className="opp-li"><span>Contact Information:</span> {props.opp.contact}</p>
        </li>
    )
}

export default Opportunity