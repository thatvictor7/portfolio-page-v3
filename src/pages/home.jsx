import React from 'react'
import { Icon } from 'semantic-ui-react'
import {
    Link
} from "react-router-dom"
import './home.css'

export default function home() {
    return (
        <div className='home-container width-full'>
            <div className='home-content'>
                <div className='logo animate__animated animate__backInDown'></div>

                <div className='home-intro-container'>
                    <div className='home-intro'>
                        <div className='animate__animated animate__slideInLeft'>Hello World!</div>
                    I'm <span className='name'>Victor</span><br></br>
                    </div>
                </div>
                {/* <Link as='a' type='submit' to='/about' className='enter-button '>Enter</Link> */}
                <Link to='/about'>
                    <div as='button' href='/about' className='enter-button primary animate__animated animate__pulse animate__delay-3s animate__repeat-2'>ENTER</div>
                </Link>
            </div>
        </div>
    )
}