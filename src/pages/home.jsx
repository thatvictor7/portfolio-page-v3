import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './home.css'

export default function home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='logo'></div>

                <div className='home-intro-container'>
                    <div className='home-intro'>
                        <div>Hello World!</div>
                    I'm <span className='name'>Victor</span><br></br>
                    </div>

                    <div>A Software Developer</div>
                </div>

                <Button as='button' href='/about' className='enter-button '>Enter</Button>
            </div>
            <div className='social-icons-container'>
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