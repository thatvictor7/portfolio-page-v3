import React from 'react'
import { Icon } from 'semantic-ui-react'
import {
    Link
} from "react-router-dom"
import './home.css'

export default function home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='logo animate__animated animate__backInDown'></div>

                <div className='home-intro-container'>
                    <div className='home-intro'>
                        <div className='animate__animated animate__slideInLeft'>Hello World!</div>
                    I'm <span className='name'>Victor</span><br></br>
                    </div>

                    {/* <div>A Software Developer</div> */}
                </div>

                {/* <Link as='a' type='submit' to='/about' className='enter-button '>Enter</Link> */}
                <Link to='/about'>
                    <div as='button' href='/about' className='enter-button primary animate__animated animate__pulse animate__delay-3s animate__repeat-2'>ENTER</div>
                </Link>
            </div>
            {/* <div className='social-icons-container'>
                <a className='social-block' href='https://www.linkedin.com/in/victor-des/'>
                    <Icon className='social-icon' size='large' name='linkedin alternate' />
                </a>
                <a className='social-block' href='https://github.com/thatvictor7'>
                    <Icon className='social-icon' size='large' name='github alternate' />
                </a>
                <a className='social-block' href='mailto:montoya.victor7@gmail.com'>
                    <Icon className='social-icon' size='large' name='at' />
                </a>
            </div> */}
        </div>
    )
}