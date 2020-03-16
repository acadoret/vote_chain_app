import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { 
    Navbar, Nav, 
    Button, InputGroup, 
    FormControl 
} from 'react-bootstrap'

const BootNav = ({bg, expand,handleSearchClick, handleLogClick, loggedIn}) => {
    return (
        <Navbar bg={bg} expand={expand}>
            <Navbar.Brand href="#">Vote Chain</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar"/>
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
                        <Button variant="outline-light" onClick={handleSearchClick}><FontAwesomeIcon icon={faSearch}/></Button>
                    </InputGroup.Append>
                </InputGroup>   
                {
                    loggedIn ? (
                        <Button onClick={handleLogClick} variant="info">Log in</Button>
                    ) : (
                        <Button onClick={handleLogClick} variant="danger">Log out</Button>
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
