import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './home.css'

export default function home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='intro-container'>
                    <div className='intro'>Hello World!</div>
                    <div className='name'>I'm Victor</div>
                    <div className='intro-text'>Welcome to my page</div>
                    <Button>About</Button>
                </div>
                <div className='social-container'>
                    <div className='social-icon'>
                        <Icon size='large' name='linkedin' />
                    </div>
                    <div className='social-icon'>
                        <Icon size='large' name='github' />
                    </div>
                    <div className='social-icon'>
                        <Icon size='large' name='mail' />
                    </div>
                </div>
            </div>
        </div>
    )
}