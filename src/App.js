// import React from 'react'
// import Navbar from './components/navbar.jsx'
// import Home from './pages/home.jsx'
// import About from './pages/about.jsx'
// import Portfolio from './pages/portfolio.jsx'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom"
// import './App.css'

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       navbarVisible: true
//     }
//     // this.sidebarOpen = this.sidebarOpen.bind(this)
//   }


//   // sidebarOpen(params) {
//   //   // params.preventDefault()
//   //   // this.setState({ navbarVisible:  false})
//   //   // this.setState( state => ({
//   //   //   navbarVisible: !state.navbarVisible
//   //   // }))
//   //   console.log(this.state, params, 'test');
//   // }
//   componentDidUpdate =() => {
//     console.log('test');
//   }

//   render() {


//     return (
//       // <div className="App" >
//       //   <Navbar navbarVisible={this.state.navbarVisible} content={<Home />} />
//       // </div>
//       <div className='App'>
//       {/* {this.sidebarOpen()} */}
//         <Router>
//           <Switch>

//             <Route exact path='/'>
//               {/* <Navbar open={console.log('props')} navbarVisible={this.state.navbarVisible} content={<Home />} /> */}
//               <Navbar />
//               <Home />
//             </Route>

//             <Route exact path='/about'>
//               <Navbar navbarVisible={this.state.navbarVisible} content={<About />} />
//             </Route>

//             <Route exact path='/portfolio'>
//               <Navbar navbarVisible={this.state.navbarVisible} content={<Portfolio />} />
//             </Route>

//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

// export default App;
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

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
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
              {/* <Icon name='home' /> */}
        Home
      </Menu.Item>
            <Menu.Item href='/about' as='a'>
              {/* <Icon name='user' /> */}
        About
      </Menu.Item>
            <Menu.Item href='/portfolio' as='a'>
              {/* <Icon name='th' /> */}
        Portfolio
      </Menu.Item>
            <Menu.Item href='/contact' as='a'>
              {/* <Icon name='address card' /> */}
        Contact
      </Menu.Item>
            <Menu.Item as='a'>
              {/* <Icon name='suitcase' /> */}
        Hire Victor
      </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              
              {!this.state.navbarVisible ? 
              // console.log('visible')
                <div onClick={this.navOpen} className='nav-icon-container'>
                <Icon size='big' className='nav-icon' name='bars' />
              </div>
              : null
              }

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