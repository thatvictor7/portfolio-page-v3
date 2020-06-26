import React from 'react'
import './techButtons.css'

export default function TechButtons(props) {

    const { tech } = props

    return(
        <div className='tech-container'>
            {tech.map((t) => {
                return <div className='tech-button'>{t}</div>
            })}
        </div>
    )
}