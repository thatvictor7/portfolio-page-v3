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
        ['JavaScript', 'js'],
        ['ReactJS', 'react'],
        ['NodeJS', 'node js'],
        ['React Native', 'react'],
        // ['SQL', 'database'],
        ['Github', 'github'],
        ['Python', 'python'],
        ['HTML5', 'html5'],
        ['CSS', 'css3 alternate']
        // ['RESPONSIVE DESIGN', 'mobile alternate']
    ]

    const system = [
        ['Windows 10/8', 'windows'],
        ['Linux Fedora/Ubuntu', 'linux'],
        ['macOS', 'apple'],
        ['Android', 'android'],
        ['iOS', 'apple']
    ]

    const hardware = [
        // ['Installation', 'microchip'],
        // ['Troubleshooting', 'configure'],
        // ['Drivers', 'exclamation triangle']
        ['Installation'],
        ['Troubleshooting'],
        ['Drivers']
    ]

    const software = [
        // ['Installation', 'window maximize'],
        // ['Microsoft Office', 'microsoft'],
        ['Installation'],
        ['Troubleshooting'],
        ['Installation'],
        ['Microsoft Office'],
    ]

    const databases = [
        // ['PostgreSQL', 'database'],
        // ['MS Access', 'microsoft'],
        // ['ER Diagram Design', 'arrows alternate horizontal']
        ['PostgreSQL'],
        ['MS Access'],
        ['ER Diagram Design']
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
        <div className='parallax layout'>
            <div className='about-title'>
                 About Me 
             </div>

             <div className='info-section spacer20'>
                <div className='image-container'>
                    <div className='profile-image'></div>
                </div>

                <div className='description-container'>
                    <div className='location'>
                        I am an IT Technician based out of Denver, Colorado.
                    </div>
                    <div className='about-description'>
                        {/* {'I am a collaborative problem solver who values innovation and taking on new challenges. I create responsive and visually appealing websites that work in a wide range of devices.'} */}
                        {'I am a collaborative problem solver who values innovation and taking on new challenges. I enjoy working with technology, doing anything from hardware installation to creating responsive websites.'}
                    </div>
                </div>
            </div>

            <div>
                 <div className='aplus-cert'></div>
            </div>

            <div className='skills-container spacer20'>
            <Card skillType='Programming' skills={skills} skillsRight={true} />
            <Card skillType='Operating Systems' skills={system} skillsRight={false} />
            <Card skillType='Hardware' skills={hardware} skillsRight={true} />
            <Card skillType='Software' skills={software} skillsRight={false} />
            <Card skillType='Databases' skills={databases} skillsRight={true} />
            </div>

            <Link to='/portfolio'>
                <div as='button' href='/portfolio' className='spacer20bottom enter-button primary animate__animated animate__pulse animate__delay-3s animate__repeat-2'>PORTFOLIO</div>
            </Link>

            <Footer />
        </div>
    )
}