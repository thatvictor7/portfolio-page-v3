import React from 'react'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      navbarVisible: false 
    }
  }

  render() {
    return (
      <div className="App" >
        <Navbar navbarVisible={this.state.navbarVisible} content={<Home />} />
      </div>
    )
  }
}

export default App;
