import React from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './App.css'
import './components/navbar.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarVisible: false
    }
  }

  navOpen = () => {
    this.setState(state => ({
      navbarVisible: !state.navbarVisible
    }))
  }

  render() {


    return (
      <div className='App'>
        <div onClick={this.navOpen} className='nav-icon-container'>
          <div className='nav-logo'></div>
          <Icon size='big' className='nav-icon' name='bars' />
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            onClick={this.navOpen}
            as={Menu}
            // className='sidebar'
            animation='overlay'
            icon='labeled'
            direction='right'
            inverted
            vertical
            visible={this.state.navbarVisible}
            width='thin'
          >
            {/* <Menu.Item onClick={this.navOpen} as='a'>
              <Icon name='bars' />
            </Menu.Item> */}
            <Link to='/'>
              <Menu.Item href='/' as='a'>
                HOME
              </Menu.Item>
            </Link>
            <Link to='/about'>
              <Menu.Item href='#about' as='a'>
                ABOUT
              </Menu.Item>
            </Link>
            <Link to='/portfolio'>
              <Menu.Item href='#portfolio' as='a'>
                PORTFOLIO
              </Menu.Item>
            </Link>
            <Menu.Item href='/contact' as='a'>
              CONTACT
            </Menu.Item>
            {/* <Menu.Item as='a'>
        <div className='selector'>
          LANGUAGE
        </div>
      </Menu.Item> */}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {/* <div className='nav-logo'></div> */}
              {/* {!this.state.navbarVisible ? 
              // console.log('visible')
                <div onClick={this.navOpen} className='nav-icon-container'>
                  <div className='nav-logo'></div>
                <Icon size='big' className='nav-icon' name='bars' />
              </div>
              : null
              } */}
              {/* <div onClick={this.navOpen} className='nav-icon-container'>
                <div className='nav-logo'></div>
                <Icon size='big' className='nav-icon' name='bars' />
              </div> */}
              <div>
                  <Switch>
                    <Route exact path='/'>
                      <Home />
                    </Route>

                    <Route path='/about'>
                      <About />
                    </Route>

                    <Route path='/portfolio'>
                      <Portfolio />
                    </Route>

                    <Route path='/contact'>
                      <Contact />
                    </Route>
                  </Switch>
              </div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;