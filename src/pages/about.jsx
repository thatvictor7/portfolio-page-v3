import React from 'react'
import './about.css'
import { Grid, Segment, Icon } from 'semantic-ui-react'

export default function About() {

    const skills = {
        'first': [['JavaScript', 'js'], ['React.JS', 'react'], ['SQL', 'database'], ['Github', 'github']],
        'second': [['Node.JS', 'node js'], ['React Native', 'react'], ['Python', 'python'], ['Responsive', 'mobile alternate']]
    }

    return (
        <div className='about-container'>
            <div className='header'>
                ABOUT ME
                <div className='header-bar'></div>
            </div>
            <div className='info-section'>
                <div className='profile-image'></div>
                <div className='description-container'><span><b>HELLO THERE!</b></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non. Eget mauris pharetra et ultrices neque.</div>
                <div className='skills-container'>
                    <b>TECHNICAL SKILLS</b>
                    <div className='skills-grid'>
                        <div className='skills-column'>
                            {skills['first'].map(skill => {
                                return <div className='skill-segment'>
                                    <Icon size='large' name={skill[1]} />
                                    {skill[0]}
                                </div>
                            })}
                        </div>

                        <div className='skills-column' >
                            {skills['second'].map(skill => {
                                return <div className='skill-segment'>
                                    <Icon size='large' name={skill[1]} />
                                    {skill[0]}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}