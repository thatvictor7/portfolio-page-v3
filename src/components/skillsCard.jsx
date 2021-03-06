import React from 'react'
import './skillscard.css'
import { Icon, List } from 'semantic-ui-react'

export default function skillsCard(props) {
    let { skillType, skills, skillsRight } = props

    function skillsList() {
        return (
            <List animated={true} className='skills-section' vertical>
            {/* <List className='skills-section animate__animated animate__slideInRight' verical> */}
                {skills.map((skill) => {
                    return (
                        <List.Item className='skill'>
                            <div className='list-spacer'></div>
                            {<Icon className='list-icon' name={skill[1]} />}
                            {skill[0]}
                        </List.Item>
                    )
                })}
            </List>
        )
    }

    function skillsToRight() {
        return(
            <div className='card-container'>
            <div className='skill-name primary'>
            {/* <div className='skill-name animate__animated animate__slideInLeft'> */}
                {skillType}
            </div>
            {skillsList()}
        </div>
        )
    }

    function skillsToLeft() {
        return(
            <div className='card-container'> 
                {skillsList()}
                <div className='skill-name primary'>
                {/* <div className='skill-name animate__animated animate__slideInRight'> */}
                    {skillType}
                </div>
            </div>
        )
    }

    return(
        <div>
            {skillsRight === true ? skillsToRight() : skillsToLeft()}
            {/* <div>I enjoy programming because it allows me to be creative, </div> */}
        </div>
    )
}