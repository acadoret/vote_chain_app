import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'

import '../../../static/css/Navigator.css'

function scrollToHash(id) {
    /* Find matching element by id */
    const anchor = document.getElementById(id);
    if (anchor) {
        /* Scroll to that element if present */
        anchor.scrollIntoView();
    }
}
const Navigator = ({ tabs, items, withAnchor = true }) => {
    const tabItems = tabs.map((tab, index) => (
        <Tab className={tab.classes} eventKey={tab.anchor} title={tab.name}>
            {items[index]}
        </Tab>
    ))
    React.useEffect(() => {
        if (withAnchor) {
            scrollToHash(tabs[0].anchor)
        }
    }, []);
    return (
        <Tabs className={"navigator "} defaultActiveKey={tabs[0].anchor} id="uncontrolled-tab">
            {tabItems}
        </Tabs>
    )
}

Navigator.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            anchor: PropTypes.string.isRequired,
            classes: PropTypes.string,
        })
    ).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Navigator