import React from 'react'
import { Button, Icon, Checkbox } from 'semantic-ui-react'
import './home.css'

export default function home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='intro-container'>
                    <div className='intro'>Hello World!</div>
                    <div className='name-row'>I'm <span className='name'>Victor</span></div>
                    <div className='intro-text'>Welcome to my page</div>
                    <Button href='/about' className='home-button'>Enter</Button>
                </div>

                <div className='logo'>.\V</div>

                <div className='social-container'>
                    <a className='social-icon' href=''>
                        <div>
                            <Icon size='large' name='linkedin' />
                        </div>
                    </a>
                    <div className='social-icon'>
                        <Icon size='large' name='github' />
                    </div>
                    <div className='social-icon'>
                        <Icon size='large' name='mail' />
                        {/* <Checkbox toggle /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}