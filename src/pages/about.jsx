import React from 'react'
import './about.css'
import Footer from '../components/footer.jsx'
import Card from '../components/skillsCard.jsx'
import {
    Link
} from "react-router-dom"
import { Icon, Button, List } from 'semantic-ui-react'

export default function About() {

    const skills = [
        ['JAVASCRIPT', 'js'],
        ['REACTJS', 'react'],
        ['NODEJS', 'node js'],
        ['REACT NATIVE', 'react'],
        ['SQL', 'database'],
        ['GITHUB', 'github'],
        ['PYTHON', 'python'],
        ['RESPONSIVE DESIGN', 'mobile alternate']
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
        // <div className='about-container background-main'>
        //     <div className='about-intro'>
        //         About Me **********
        //     </div>
            // <div className='info-section'>
            //     <div className='image-container'>
            //         <div className='profile-image'></div>
            //     </div>

            //     <div className='description-container'>
            //         <div className='location'>
            //             I am an IT Technician based out of Denver, Colorado.
            //         </div>
            //         <div className='about-description'>
            //             {'I am a collaborative problem solver who values innovation and taking on new challenges. I create responsive and visually appealing websites that work in a wide range of devices.'}
            //         </div>
            //     </div>
            // </div>
        //     <div className='inverted primary'>
        //         <div className='technical'>
        //             Technical Skills
        //         </div>
        //         <div className='skills-text'>I have experience with many technologies, here are some of my more recent ones I've used:</div>
        //         {skillsList()}
        //     </div>

        //     <Link to='/portfolio'>
        //         <div as='button' href='/portfolio' className='enter-button primary'>PROJECTS</div>
        //     </Link>
        //     <Footer />

        // </div>
        <div className='parallax layout'>
            <div className='about-title'>
                 About Me 
             </div>

             <div className='info-section'>
                <div className='image-container'>
                    <div className='profile-image'></div>
                </div>

                <div className='description-container'>
                    <div className='location'>
                        I am an IT Technician based out of Denver, Colorado.
                    </div>
                    <div className='about-description'>
                        {'I am a collaborative problem solver who values innovation and taking on new challenges. I create responsive and visually appealing websites that work in a wide range of devices.'}
                    </div>
                </div>
            </div>

            <Card skillType='programming' skills={skills} />

            <Footer />
        </div>
    )
}