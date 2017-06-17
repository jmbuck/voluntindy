import React from 'react'

const Opportunity = ({title, description, location, date, time, contact}) => {
    return (
        <li>
            <p>{title}</p>
            <p>{description}</p>
            <p>{location}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{contact}</p>
        </li>
    )
}

export default Opportunity