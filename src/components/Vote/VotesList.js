import React from 'react';
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faListUl, faTh, faClock } from '@fortawesome/free-solid-svg-icons'

import '../../static/css/VoteList.css';


const VoteList = ({ isLoading, handleClick, isList, votes = [] }) => {
    const loadingElement = (isLoading) && (<h2 className="loading-spinner"><FontAwesomeIcon size="2x" icon={faSpinner} pulse /></h2>)
    const voteItems = (votes.length > 0 && !isLoading) ? votes.map((voteItem, index) => (
        <article>
            <Link className="card-link" key={voteItem.address} to={"/vote/" + voteItem.address} >
                <Card as={Col} md={(isList) ? "12" : "4"} className="px-0">
                    <Card.Header className="d-flex justify-content-between">
                        <Col md="6">{index + 1}. {voteItem.name}</Col>
                        <Col className="text-right" md={{ span: "1", offset: "5" }}>
                            {(new Date(voteItem.end_date) - new Date() <= 30) ? <FontAwesomeIcon id="time-alert" icon={faClock} /> : ""}
                        </Col>
                    </Card.Header>
                    <Card.Body>

                        <Card.Title>{voteItem.description}</Card.Title>
                        <Card.Text>
                            {"End : " + new Date(voteItem.end_date).toLocaleString('en-GB', {
                                timeZone: 'UTC', year: "numeric", month: "numeric", day: "numeric"
                            })}
                        </Card.Text>
                        <Card.Text className="blockquote-footer text-center">
                            <small className="text-muted">End in</small>
                        </Card.Text>

                    </Card.Body>

                </Card>

            </Link>
        </article>
    )) : (
            <h2 className="no-vote">No vote found ...</h2>
        )
    return (
        <div>
            {loadingElement}
            {(votes.length > 0 && !isLoading) && (
                <div className="vote-header">
                    <h2>
                        In progress votes
                    <hr />
                    </h2>
                    <nav className="my-2">
                        <Button variant="outline-primary" onClick={handleClick} hidden={!isList}><FontAwesomeIcon icon={faTh} /></Button>
                        <Button variant="outline-primary" onClick={handleClick} hidden={isList}><FontAwesomeIcon icon={faListUl} /></Button>
                    </nav>
                </div>
            )}
            {voteItems}
        </div>
    )
}

VoteList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    displayType: PropTypes.number.isRequired,
    votes: PropTypes.arrayOf([
        PropTypes.shape({
            address: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            end_date: PropTypes.string.isRequired,
        })
    ]).isRequired,
}

export default VoteList