import React from 'react'
import { Button, Icon, Checkbox } from 'semantic-ui-react'
import './home.css'

export default function home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                {/* <div>
                    <div className='name-row'>Hello World!<br></br> I'm <span className='name'>Victor</span></div>
                    <div className='intro-text'>I am a Software Developer. Welcome to my page</div>
                    <Button href='/about' className='home-button'>Enter</Button>
                </div>  */}


                <div className='logo'></div>


                <div className='home-intro-container'>
                    <div className='home-intro'>
                        <div>Hello World!</div>
                    I'm <span className='name'>Victor</span><br></br>
                    </div>

                    <div>A Software Developer</div>
                </div>

                <button as='a' href='/about' className='enter-button'>Enter</button>
                {/* <div className='social-container'>
                    <a className='social-icon' href=''>
                            <Icon size='large' name='linkedin' />
                            LinkedIn
                    </a>
                    <a className='social-icon'>
                            <Icon size='large' name='github' />
                            Github
                    </a>
                    <a className='social-icon' href="mailto:thatvictor7@gmail.com">
                            <Icon size='large' name='mail' />
                            Email
                    </a>
                </div> */}
            </div>
            <div className='social-icons-container'>
                <a href=''>
                    <Icon size='large' name='linkedin' />
                </a>
                <a href=''>
                    <Icon size='large' name='github' />
                </a>
                <a href=''>
                    <Icon size='large' name='at' />
                </a>
            </div>
        </div>
    )
}