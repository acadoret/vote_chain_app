import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import '../static/css/App.css';

import Login from './Login'
import Header from './Header'
import BootNav from './Navbar'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }
  // Arrow fx for bind this 
  handleSearchClick = (event) => {
    return true
  }
  // Arrow fx for bind this 
  handleLogClick = (event) => {
    if (this.state.loggedIn) {
      console.log("Connexion panel");

    } else {
      // this.fetchLogOut()
      console.log("Disconnexion panel")
    }
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  // Arrow fx for bind this
  fetchLogOut = () => {
    fetch('http://localhost:5000/auth/logout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip , deflate, br",
          "sec-fetch-mode": "no-cors",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "content-type",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "TOKEN FROM STORE",
        }
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          loggedIn: !this.state.loggedIn
        })
      })
  }
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Header 
              title="VoteChain" 
              subtitle="The new way to express your opinions safely"
              handleLogClick={this.handleLogClick}
              handleSearchClick={this.handleSearchClick}
              loggedIn={this.state.loggedIn}
            />
            <Route path="/login" exact component={Login}/>
            {this.state.loggedIn && <Login/>}
          </div>
        </BrowserRouter>
      )
  }
}

export default App;
