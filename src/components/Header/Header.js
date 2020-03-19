import React from 'react'
import BootNav from './Navbar'
import Waves from '../Partials/Waves/Waves'
import PropTypes from 'prop-types'

const BootHeader = ({ handleLogClick, handleSearchClick, loggedIn, isNavbarScrolled, userInfo, title, subtitle }) => {
    return (
        <section id="header">
            <BootNav
                bg="transparent"
                expand="lg"
                loggedIn={loggedIn}
                userInfo={userInfo}
                isNavbarScrolled={isNavbarScrolled}
                handleLogClick={handleLogClick}
                handleSearchClick={handleSearchClick}
            />
            <div className="header">
                <div className="inner-header flex">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <div>
                <Waves/>
                </div>
            </div>
        </section>

    )
}

BootHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    handleLogClick: PropTypes.func.isRequired,
    handleSearchClick: PropTypes.func.isRequired
}

export default BootHeader
