import React from 'react'
import './skillscard.css'
import { Icon, List } from 'semantic-ui-react'

export default function skillsCard(props) {
    let { skillType, skills, skillsRight } = props

    function skillsList() {
        return (
            <List className='skills-section' verical>
            {/* <List className='skills-section animate__animated animate__slideInRight' verical> */}
                {skills.map((skill) => {
                    return (
                        <List.Item className='skill'>
                            {<Icon name={skill[1]} />}
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
        // <div className='card-container'>
        //     <div className='skill-name'>
        //         {skillType}
        //     </div>
        //     {skillsList()}
        // </div>
        <div>
            {skillsRight === true ? skillsToRight() : skillsToLeft()}

        </div>
    )
}