import React from 'react'
import { Icon, Button } from 'semantic-ui-react'
import './projectLinks.css'

export default function ProjectLinks(props) {

    let { links } = props

    return(
        <div className='project-links-container'>
            {links.map((l) => {
                // console.log(l)
                return <Button target="_blank" href={l.link} className='enter-button external-link' animated>
                    <Button.Content visible>{l.name}</Button.Content>
                    <Button.Content hidden>
                        <Icon name={l.icon} />
                    </Button.Content>
                </Button>
                
            })}
                {/* {console.log(links, "links")} */}
        </div>
    )
}