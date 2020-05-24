import React from 'react'
import {  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './navbar.css'

export default function SidebarExampleVisible(props) {
const { content, navbarVisible, open } = props
    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                direction='right'
                inverted
                vertical
                visible={navbarVisible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='bars' />
        {/* (Close) */}
      </Menu.Item>
                <Menu.Item href='/' as='a'>
                    <Icon name='home' />
        Home
      </Menu.Item>
                <Menu.Item href='/about' as='a'>
                    <Icon name='user' />
        About
      </Menu.Item>
                <Menu.Item href='/portfolio' as='a'>
                    <Icon name='th' />
        Portfolio
      </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='address card' />
        Contact
      </Menu.Item>
      
            </Sidebar>

            {/* <Sidebar.Pusher>
                <Segment basic> */}
                    {/* <div className='nav-icon-container'>
                        <Icon size='big' className='nav-icon' name='bars' />
                    </div>
                    {content} */}
                {/* </Segment>
            </Sidebar.Pusher> */}
        </Sidebar.Pushable>
    )
}