import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import '../../static/css/UserDetails.css'

import UserOverview from './UserOverview'
import Navigator from '../Partials/Navigator/Navigator'

class UserDetails extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleClick = (event) => {
        console.log({ [event.target.name]: event.target.value })
        // handleChange = event => this.setState({ [event.target.name]: event.target.value })
        this.setState({ onEdit: !this.state.onEdit})
    }
    render() {
        const user = this.props.user
        const tabs = [
            { name: "Personal informations", anchor: "account", classes: "account-content" },
            { name: "Your votes", anchor: "votes" },
            { name: "Your choices", anchor: "choices" }
        ]
        const items = tabs.map(tab => (
            <Container id={tab.anchor}>
                <UserOverview
                    user={user}
                    onEdit={this.state.onEdit}
                    handleSubmit={this.handleSubmit} 
                    handleClick={this.handleClick} 
                />
            </Container>
        ))
        return (
            <Navigator tabs={tabs} items={items} />
        )
    }
}

UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    //let address = ownProps.match.params.user_id
    //fetch user data here
    fetch('http://localhost:5000/users/' + state.userInfo.email, {
        method: "GET",
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


    })
    console.log(state.userInfo)
    return {
        user: {
            address: state.userInfo.address,
            name: state.userInfo.userName,
            email: state.userInfo.email
        }
    }
}



export default connect(mapStateToProps)(UserDetails)