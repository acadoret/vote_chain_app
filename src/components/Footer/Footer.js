import React from 'react'
import Waves from '../Partials/Waves/Waves'
import PropTypes from 'prop-types'

const Footer = ({  }) => {
    return (
        <section id="footer">
            <div className="footer">
                <div>
                    <Waves/>
                </div>
                <div className="inner-footer flex">
                    <h1>{}</h1>
                    <p>{}</p>
                </div>
            </div>
        </section>

    )
}

// Footer.propTypes = {
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     loggedIn: PropTypes.bool.isRequired,
//     handleLogClick: PropTypes.func.isRequired,
//     handleSearchClick: PropTypes.func.isRequired
// }

export default Footer