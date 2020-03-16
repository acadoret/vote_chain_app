import React, {Component} from 'react'
import BootNav from './Navbar'


const BootHeader = ({handleLogClick, handleSearchClick, loggedIn}) => {
    return (
        <section className="hero is-medium is-primary is-bold" >
            <div className="hero-head">
                <BootNav
                    bg="dark" 
                    expand="lg"
                    loggedIn={loggedIn} 
                    handleLogClick={handleLogClick} 
                    handleSearchClick={handleSearchClick} 
                />
            </div>
            <div className="hero-body">
                <h1 className="title is-1">VoteChain</h1>
                <h2 className="title is-2">Great H2</h2>
            </div>
            <div className="hero-foot"></div>
        </section>
    )
}

export default BootHeader
