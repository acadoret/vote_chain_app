import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import {
    Navbar, Nav,
    Button, InputGroup,
    FormControl
} from 'react-bootstrap'

const BootNav = ({ bg, expand, handleSearchClick, handleLogClick, loggedIn, userInfo, isNavbarScrolled }) => {
    
    const userDetails = loggedIn ? (
        <div className="d-flex">
            <span className="m-auto px-2">Hi, <Link to={"/user/" + userInfo.address}>{userInfo.userName}</Link></span>
        </div>
    ) : (
            <div className=""></div>
        );
    // const classes = "navbar-custom navbar-scrolled" 
    const classes = isNavbarScrolled ? "navbar-custom navbar-scrolled": "navbar-custom" 
    return (
        <Navbar className={classes} bg={bg} variant="dark" expand={expand}>
            <Navbar.Brand href="/">Vote Chain</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
                <Nav className="mr-auto">
                    <Nav.Link href="">Votes</Nav.Link>
                    <Nav.Link href="">Test</Nav.Link>
                </Nav>
                <InputGroup className="col-md-2">
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-light" onClick={handleSearchClick}><FontAwesomeIcon icon={faSearch} /></Button>
                    </InputGroup.Append>
                </InputGroup>
                <Navbar.Text>

                    {userDetails}
                </Navbar.Text>
                {
                    loggedIn ? (
                        <Button onClick={handleLogClick} variant="danger">Log out</Button>
                    ) : (
                            <Button href="/login" variant="info">Log in</Button>
                        )
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

BootNav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    bg: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    handleLogClick: PropTypes.func.isRequired,
    handleSearchClick: PropTypes.func.isRequired,
}

export default BootNav
