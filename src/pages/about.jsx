import React from 'react'
import './about.css'
import { Icon, Button, List } from 'semantic-ui-react'

export default function About() {

    // const skills = {
    //     'first': [['JAVASCRIPT', 'js'], ['REACTJS', 'react'], ['SQL', 'database'], ['GITHUB', 'github']],
    //     'second': [['NODEJS', 'node js'], ['REACT NATIVE', 'react'], ['PYTHON', 'python'], ['RESPONSIVE', 'mobile alternate']]
    // }

    const skills = [
        ['JAVASCRIPT', 'js'],
        ['REACTJS', 'react'],
        ['NODEJS', 'node js'],
        ['REACT NATIVE', 'react'],
        ['SQL', 'database'],
        ['GITHUB', 'github'],
        ['PYTHON', 'python'],
        ['RESPONSIVE', 'mobile alternate']
    ]

    function skillsList() {
        return (
            <List className='skills-list' horizontal>
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

    return (
        <div className='about-container'>
            <div className='about-intro'>
                About Me
            </div>
            <div className='info-section'>
                <div className='image-container'>
                    <div className='profile-image'></div>
                </div>

                <div className='description-container'>
                    {/* <div className='about-intro'>
                        About Me
                    </div> */}
                    <div className='location'>
                        I'm a Software Developer based out of Denver, Colorado.
                    </div>
                    <div className='about-description'>
                        {'I am a collaborative problem solver who values innovation and taking on new challenges. I create responsive and visually appealing websites that work in a wide range of devices.'}
                    </div>
                </div>
            </div>
            <div className='inverted'>
                <div className='technical'>
                    Technical Skills
                </div>
                <div className='skills-text'>I have experience with many technologies, here are some of my more recent ones I've used:</div>
                {skillsList()}
            </div>

            <Button as='button' href='/portfolio' className='enter-button button-animation'>PROJECTS</Button>

            <div className='social-icons-container about-social-icons'>
                <a className='social-block' href='https://www.linkedin.com/in/victor-montoya/'>
                    <Icon className='social-icon' size='large' name='linkedin alternate' />
                </a>
                <a className='social-block' href='https://github.com/thatvictor7'>
                    <Icon className='social-icon' size='large' name='github alternate' />
                </a>
                <a className='social-block' href='mailto:montoya.victor7@gmail.com'>
                    <Icon className='social-icon' size='large' name='at' />
                </a>
            </div>
        </div>
    )
}