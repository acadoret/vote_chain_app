import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from "react-redux"
import { Container } from 'react-bootstrap'

import '../static/css/App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Home from './Home/Home'
import UserDetails from './UserDetails/UserDetails'
import Vote from './Vote/Vote'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isNavbarScrolled: false
  //   }
  // }

  // Arrow fx for bind this
  fetchLogOut = () => {
    console.log("fetch logout")
    fetch('http://localhost:5000/auth/logout', {
      method: "POST",
      body: {},
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip , deflate, br",
        "Authorization": this.props.userInfo.bearer,
        "sec-fetch-mode": "no-cors",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
        "Access-Control-Allow-Origin": "*",
      }
    }).then(response => response.json())
      .then(response => {
        console.log("fetch logout")
        this.props.logout()
      })
  }

  // Arrow fx for bind this 
  handleSearchClick = (event) => {
    return true
  }
  // Arrow fx for bind this 
  handleLogClick = (event) => {
    console.log("fetch logout")
    this.fetchLogOut();
  }

  handleIntersection(event) {
    console.log(event.isIntersecting);
    this.setState({
      visibility: event.isIntersecting ? 'visible' : 'invisible',
    });
  }
  render() {
    const options = {
      onChange: this.handleIntersection,
      root: '#main-content',
      rootMargin: '0%',
    };
    const { loggedIn, userInfo } = this.props
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            title="VoteChain"
            subtitle="The new way to express your opinions safely"
            handleLogClick={this.handleLogClick}
            handleSearchClick={this.handleSearchClick}
            loggedIn={loggedIn}
            userInfo={userInfo}
            isNavbarScrolled={false}
          />
          <Container fluid className="main-content">

            <Route path="/" exact component={Vote} />
            <Route path="/login" exact component={Login} />
            <Route path="/index" exact component={Home} />
            <Route path="/user/:user_id" exact component={UserDetails} />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    isNavbarScrolled: state.isNavbarScrolled,
    loggedIn: state.loggedIn,
    userInfo: {
      address: state.userInfo.address,
      bearer: state.userInfo.bearer,
      userName: state.userInfo.userName,
      email: state.userInfo.email,
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch({
        type: "LOGOUT_USER",
        userInfo: {},
        loggedIn: false
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
