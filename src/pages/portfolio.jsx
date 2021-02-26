import React from 'react'
import { Grid, Icon, Modal, Button, Image, Header } from 'semantic-ui-react'
import './portfolio.css'
import TechButtons from '../components/techButtons.jsx'
import ProjectLinks from '../components/projectLinks.jsx'
import Data from '../projects.json'
import Footer from '../components/footer.jsx'

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
            <div>
                this is a test
            </div>

            <Grid columns='2'>
            <Grid.Row className='row spacer20'>
                    {Data.projects.row1.map((p) => {
                        // let style = p.styling + ' primary'
                        return <Modal closeIcon trigger={<Grid.Column>
                            <div className={p.styling}>
                            {/* <div className={style}> */}
                                <div className='project-overlay'>
                                    <div className='text'>
                                        <div>{p.name}</div>
                                        <p className='expand'>(click to expand)</p>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>}>
                            <Modal.Header className='primary'>{p.name}</Modal.Header>
                            <Modal.Content className='background-main' image>
                                <Image wrapped size='big' src={projectImages[p.name]} />
                                <Modal.Description>
                                    <p>{p.description}</p>
                                    <TechButtons tech={p.tech} />
                                    <ProjectLinks links={p.links} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>  
                    })}
                </Grid.Row>
            </Grid>

            <Footer />
        </div>
    )
}