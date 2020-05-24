import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import './portfolio.css'

export default function Portfolio() {
    // const dh = url('../assets/denverHelps.png')
    return(
        <div className='portfolio-container'>
            <Grid  columns={3} stackable>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block top-left'>
                            {/* project 1 */}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block top-center'>
                            {/* project 1 */}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block top-right'>
                            {/* project 1 */}
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block middle-left'>
                            {/* project 1 */}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-center'>
                            <div>Projects</div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block middle-right'>
                            {/* project 1 */}
                            <Icon size='massive' name='building' />
                            <div className='text'>
                                Bank Database
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='row'>
                    <Grid.Column>
                        <div className='block bottom-left'>
                            <Icon size='massive' name='mail' />
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block bottom-center'>
                            <Icon size='massive' name='angular' />
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className='block bottom-right'>
                            <Icon size='massive' name='database' />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}