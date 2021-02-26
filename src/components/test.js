import React from 'react'
import { Grid, Icon, Modal, Button, Image, Header } from 'semantic-ui-react'
import './portfolio.css'
import TechButtons from '../components/techButtons.jsx'
import ProjectLinks from '../components/projectLinks.jsx'
import Data from '../projects.json'

export default function Portfolio() {

    let projectImages = {
        "Denver Helps": require('../assets/denverHelps.png'),
        "A Good Living": require('../assets/agl.png'),
        "Loan Calculator": require('../assets/loanApp.png'),
        "Notesy": require('../assets/notesy.png'),
        "Swyft": require('../assets/swift.png')
    }

    return (
        // <div className='portfolio-container'>
        <div className='parallax layout'>
            {/* <div className='portfolio-title'>PORTFOLIO</div> */}
            <div className='about-title'>PORTFOLIO</div>
            <Grid columns={3} stackable>

                <Grid.Row className='row'>
                    {Data.projects.row1.map((p) => {
                        return <Modal trigger={<Grid.Column>
                            <div className={p.styling}>
                                <div className='project-overlay'>
                                    <div className='text'>
                                        <div>{p.name}</div>
                                        {/* {console.log(p)} */}
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>}>
                            <Modal.Header>{p.name}</Modal.Header>
                            <Modal.Content image>
                                <Image wrapped size='big' src={projectImages[p.name]} />
                                {console.log(p.image)}
                                <Modal.Description>
                                    {/* <Header>Default Profile Image</Header> */}
                                    <p>{p.description}</p>
                                    <TechButtons tech={p.tech} />
                                    <ProjectLinks links={p.links} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>  
                    })}
                </Grid.Row>

                <Grid.Row className='row'>
                    {
                        Data.projects.row2.map((p) => {
                            return <Modal trigger={<Grid.Column>
                                <div className={p.styling}>
                                    <div className='project-overlay'>
                                        <div className='text'>
                                            <div>{p.name}</div>
                                            {/* {console.log(p)} */}
                                        </div>
                                    </div>
                                </div>
                            </Grid.Column>}>
                                <Modal.Header>{p.name}</Modal.Header>
                                <Modal.Content image>
                                    <Image wrapped size='big' src={projectImages[p.name]} />
                                    {console.log(p.image)}
                                    <Modal.Description>
                                        {/* <Header>Default Profile Image</Header> */}
                                        <p>{p.description}</p>
                                        <TechButtons tech={p.tech} />
                                        <ProjectLinks links={p.links} />
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        })
                    }
                    {/* <Grid.Column>
                        <div className='block middle-left'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Notesy</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-center'>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-right'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Swyft</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column> */}
                </Grid.Row>

                {/* <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block bottom-left'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Gmail Clone</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block bottom-center'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Angular Issues</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block bottom-right'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Database</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row> */}
            </Grid>
        </div>
    )
}