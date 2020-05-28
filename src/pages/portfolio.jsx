import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import './portfolio.css'

export default function Portfolio() {
    // const dh = url('../assets/denverHelps.png')
    return (
        <div className='portfolio-container'>
            <Grid columns={3} stackable>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block top-left'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Denver Helps</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block top-center'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>A Good Living</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block top-right'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Loan Calculator</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block middle-left'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Notesy™️</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-center'>
                            <div>PROJECTS</div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-right'>
                            <div className='project-overlay'>
                                <div className='text'>
                                    <div>Bank Api</div>
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block bottom-left'>
                            {/* <Icon size='massive' name='mail' /> */}
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
                </Grid.Row>
            </Grid>
        </div>
    )
}