import React from 'react'
import './contact.css'
import { Button, Form } from 'semantic-ui-react'

export default function Contact() {
    return(
        <div className='contact-container'>
            <div className='header'>
                CONTACT
                <div className='header-bar'></div>
            </div>

            <div className='contact-info'>
                <div>Want to start a project or would like to would like to work with me or simply contact me?</div>
                <div>Send me an email to <a>montoya.victor7@gmail.com</a> or complete this form.</div>
            </div>

            <Form>
                <Form.Field>
                    <input className='input-field' placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <input type='email' className='input-field' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <textarea maxLength='500' className='message-input' type='text' placeholder='Enter your message here'></textarea>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}