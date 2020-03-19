import React, { Component } from 'react';
import { connect } from "react-redux"

import { Container, ButtonGroup, Button } from 'react-bootstrap'


import Navigator from '../Partials/Navigator/Navigator'
import VoteList from './VotesList'

class Vote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isList: false,
            votes: false,
        }
    }
    componentDidMount() {
        console.log("OKOK")
        fetch('http://localhost:5000/contracts/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip , deflate, br",
                "sec-fetch-mode": "no-cors",
                "Access-Control-Request-Headers": "content-type",
                "Access-Control-Request-Method": "GET",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(json => {
                console.table(json)
                this.setState({
                    isLoading: false,
                    votes: json["data"]
                })
            })
    }
    handleClick = () => { this.setState({ isList: !this.state.isList }) } 
    render() {
        const { isLoading, votes, isList } = this.state;
        console.table(votes[0])
        const tabs = [
            { name: "In progress votes", anchor: "in-progress-votes", classes: "in-progress" },
            { name: "Closed votes", anchor: "closed-votes", classes: "closed" },
        ]
        const items = tabs.map(tab => (
            <Container id={tab.anchor}>
                <VoteList isLoading={isLoading} votes={votes} handleClick={this.handleClick} isList={isList} />
            </Container>
        ))
        return (
            <section>
                <Navigator tabs={tabs} items={items} withAnchor={false} />
            </section>
        );
    }

}

// const mapStateToProps = state => {
//     return {

//         loggedIn: state.loggedIn,
//         userInfo: {
//             address: state.userInfo.address,
//             bearer: state.userInfo.bearer,
//             userName: state.userInfo.userName,
//             email: state.userInfo.email,
//         }
//     }
// }

// const mapDispatchToProps = dispatch => {

// }

export default Vote;
