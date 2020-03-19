import React, { Component } from 'react'
import { Modal, Tabs, Tab, Container } from 'react-bootstrap'
import { connect } from "react-redux"
import '../../static/css/Login.css'

import SignForm from './SignForm'
import Navigator from '../Partials/Navigator/Navigator'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_loading: false,
            userName: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmedEmail: false,
            confirmedPassword: false,
        }
    }

    handleConfirmPassword = event => this.setState({ confirmedPassword: (event.target.value === this.state.password) ? true : false })
    handleConfirmEmail = event => this.setState({ confirmedEmail: (event.target.value === this.state.email) ? true : false })
    handleChange = event => this.setState({ [event.target.name]: event.target.value })
    resetForm = event => this.setState({ email: "", userName: "", password: "", login: "" })

    handleSwitchTab = event => {
        console.log(event.target)
        console.log(event.target.value)

    }

    submitForm = (event) => {
        event.preventDefault()
        console.log(event)
        if (event.target.value === "signin") {
            fetch('http://localhost:5000/auth/login', {
                method: "POST",
                body: JSON.stringify({
                    "email": this.state.email,
                    "password": this.state.password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Encoding": "gzip , deflate, br",
                    "sec-fetch-mode": "no-cors",
                    "Access-Control-Request-Headers": "content-type",
                    "Access-Control-Request-Method": "POST",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(response => response.json()).then(response => {
                console.table(response)
                console.log(typeof (response.user))
                let user = JSON.parse(response.user)
                this.props.login({
                    address: user.address,
                    bearer: response.Authorization,
                    userName: user.username,
                    email: user.email
                })
                console.info("Successfully connected")
                // this.props.history.push("/")
            })
        }
        else {
            fetch('http://localhost:5000/users/create', {
                method: "POST",
                body: JSON.stringify({
                    "email": this.state.email,
                    "password": this.state.password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Encoding": "gzip , deflate, br",
                    "sec-fetch-mode": "no-cors",
                    "Access-Control-Request-Headers": "content-type",
                    "Access-Control-Request-Method": "POST",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(response => response.json()).then(response => {
                // REDIRECT TO / HERE
                this.props.history.push("/")
                // console.table(response)
                // let token = response.Authorization
                // console.log(token)
            })
        }
    }

    render() {
        const tabs = [
            { name: "Sign in", anchor: "signin" },
            { name: "Sign up", anchor: "signup" },
        ]
        const items = tabs.map(tab => (
            <Container id={tab.anchor}>
                <SignForm
                    formType={tab.anchor}
                    confirmedEmail={this.state.confirmedEmail}
                    confirmedPassword={this.state.confirmedPassword}
                    handleConfirmEmail={this.handleConfirmEmail}
                    handleConfirmPassword={this.handleConfirmPassword}
                    handleChange={this.handleChange}
                    submitForm={this.submitForm}
                    resetForm={this.resetForm}
                />
            </Container>
        ))
        return (
            <Navigator tabs={tabs} items={items} />
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        userInfo: state.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userInfo) => {
            dispatch({
                type: "LOGIN_USER",
                userInfo: userInfo,
                loggedIn: true
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);