import React from 'react'
import './footer.css'
import { Icon } from 'semantic-ui-react'

export default function footer() {
    return(
        <div className='footer-container primary'>
            <div className='button-group'>
                <a className='' href='https://www.linkedin.com/in/victor-des/'>
                    <Icon className='social-icon' size='large' name='linkedin alternate' />
                </a>
                <a className='' href='https://github.com/thatvictor7'>
                    <Icon className='social-icon' size='large' name='github alternate' />
                </a>
                <a className='' href='mailto:montoya.victor7@gmail.com'>
                    <Icon className='social-icon' size='large' name='at' />
                </a>
            </div>
        </div>
    )
}