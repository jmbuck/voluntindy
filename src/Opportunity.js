import React from 'react'

const Opportunity = (props) => {
    return (
        <li>
            <p>Title: {props.opp.title}</p>
            <p>Description: {props.opp.description}</p>
            <p>Location: {props.opp.location}</p>
            <p>Date: {props.opp.date}</p>
            <p>Time: {props.opp.time}</p>
            <p>Contact Information: {props.opp.contact}</p>
        </li>
    )
}

export default Opportunity