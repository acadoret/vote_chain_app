import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SignForm = ({
    handleChange, 
    handleConfirmEmail, 
    handleConfirmPassword,
    submitForm, resetForm, formType, 
    password, email, confirmedEmail
}) => {

    return (
        <Form className="sign-form m-4">
            {formType === "signin" && (
                <Form.Group controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
            )}
            {formType === "signup" && (
                <Form.Group>
                    <Row>
                        <Col><Form.Control 
                            type="email" placeholder="Email"
                            name="email"
                            isValid={confirmedEmail} 
                            isInvalid={!confirmedEmail}
                            onChange={handleChange} 
                        /></Col>
                        <Col><Form.Control 
                            type="email" placeholder="Confirm email"
                            name="confirmedPassword"
                            isValid={(event) => event.target.value === email} 
                            isInvalid={(event) => event.target.value !== email}
                        /></Col>
                    </Row>
                </Form.Group>
            )}
            {formType === "signin" && (
                <div>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </div>
            )}
            {formType === "signup" && (
                <div>
                    <Form.Group>
                        <Row>
                            <Col><Form.Control 
                                type="password" placeholder="Password"
                                name="password"
                                isValid={false} 
                                isInvalid={!false}
                                onChange={handleChange} 
                            /></Col>
                            <Col><Form.Control 
                                type="password" placeholder="Confirm password"
                                name="confirmedPassword"
                                isValid={false} 
                                isInvalid={!false}
                                onChange={handleConfirmPassword} 
                            /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="userName" type="text" placeholder="User name / Pseudo" onChange={handleChange} />
                        <br/>
                        <Form.Control name="firstName" type="text" placeholder="First name" onChange={handleChange} />
                        <br/>
                        <Form.Control name="lastName" type="text" placeholder="Last name" onChange={handleChange} />
                    </Form.Group>
                </div>
            )}
            <Form.Group>
                <Button className="m-1" variant="danger" type="reset" onClick={resetForm}>Reset</Button>   
                <Button className="m-1" variant="primary" type="submit" value={formType} onClick={submitForm}>Submit</Button>
            </Form.Group>                
        </Form>
    )
}
SignForm.propTypes = {
    formType: PropTypes.string.isRequired,
    confirmedEmail: PropTypes.bool.isRequired,
    confirmedPassword: PropTypes.bool.isRequired,

    resetForm: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleConfirmEmail: PropTypes.func.isRequired,
    handleConfirmPassword: PropTypes.func.isRequired,
}


export default SignForm