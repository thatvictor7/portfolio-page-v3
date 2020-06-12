import React from 'react'
// import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/contact.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <Menu.Item onClick={this.navOpen} as='a'>
              <Icon name='bars' />
            </Menu.Item>
            <Menu.Item href='/' as='a'>
        HOME
      </Menu.Item>
            <Menu.Item href='/about' as='a'>
        ABOUT
      </Menu.Item>
            <Menu.Item href='/portfolio' as='a'>
              {/* <Icon name='th' /> */}
        PORTFOLIO
      </Menu.Item>
            <Menu.Item href='/contact' as='a'>
              {/* <Icon name='address card' /> */}
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

              <Router>
                <Switch>

                  <Route exact path='/'>
                    <Home />
                  </Route>

                  <Route exact path='/about'>
                    <About />
                  </Route>

                  <Route exact path='/portfolio'>
                    <Portfolio />
                  </Route>

                  <Route exact path='/contact'>
                    <Contact />
                  </Route>

                </Switch>
              </Router>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;