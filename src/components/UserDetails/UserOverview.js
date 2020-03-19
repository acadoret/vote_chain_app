import React, { Component } from 'react'
import { Col, Row, Form, InputGroup, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

const UserOverview = ({ validated, handleSubmit, handleClick, user, onEdit = false }) => {
    // const [validated, setValidated] = React.useState(false)
    return (
        <section>
            <Row>
                <Col md="12">
                    <h2>Personnal informations</h2>
                    <hr />
                </Col>
            </Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="6" >
                        <Form.Label hidden={!onEdit}>First name</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend hidden={onEdit}>
                                <InputGroup.Text className="overview-input"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                defaultValue={user.firstname}
                                required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label hidden={!onEdit}>Last name</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend hidden={onEdit}>
                                <InputGroup.Text className="overview-input"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Last name"
                                defaultValue={user.lastname}
                                required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label hidden={!onEdit}>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend  hidden={onEdit}>
                                <InputGroup.Text className="overview-input">
                                    <FontAwesomeIcon icon={faAt} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend hidden={!onEdit}>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faAt} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                value={user.name}
                                required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                        <Form.Label hidden={!onEdit}>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend hidden={onEdit}>
                                <InputGroup.Text className="overview-input">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                aria-describedby="inputGroupAppend"
                                value={user.email}
                                required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                            />
                            <InputGroup.Append hidden={!onEdit}>
                                <InputGroup.Text id="inputGroupAppend">@example.com</InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                Please choose an email.
                                </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <h4>Adresses</h4>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label hidden={!onEdit}>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            defaultValue={user.city}
                            required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label hidden={!onEdit}>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            defaultValue={user.state}
                            required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label hidden={!onEdit}>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            defaultValue={user.zip}
                            required={!onEdit} plaintext={!onEdit} readOnly={!onEdit}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                {(onEdit) ? (
                    <Form.Row>
                        <Col className="text-right" md={{ span: 4, offset: 8 }}>
                            <Form.Group >
                                <Form.Check
                                    type="switch"
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <ButtonToolbar className="justify-content-end" aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2" aria-label="Undo modifications">
                                    <Button onClick={handleClick} variant="danger">Undo</Button>
                                </ButtonGroup>
                                <ButtonGroup aria-label="Submit modifications">
                                    <Button type="submit" variant="success">Submit modifications</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Form.Row>
                ) : (
                        <Button onClick={handleClick} variant="info">Edit your informations</Button>
                    )}

            </Form>
        </section>
    )
}

export default UserOverview