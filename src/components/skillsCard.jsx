import React from 'react'
import './skillscard.css'
import { Icon, List } from 'semantic-ui-react'

export default function skillsCard(props) {
    let { skillType, skills } = props

    function skillsList() {
        return (
            <List className='skills-section' verical>
                {skills.map((skill) => {
                    return (
                        <List.Item>
                            {<Icon name={skill[1]} />}
                            {skill[0]}
                        </List.Item>
                    )
                })}
            </List>
        )
    }

    return(
        <div className='card-container'>
            {skillType}
            {skillsList()}
        </div>
    )
}