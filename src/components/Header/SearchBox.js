import PropTypes from 'prop-types'
import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Form } from "react-bulma-components"

export default class SearchBox extends React.Component {
    state = {
        value: "Search",
    }
    handleSearchSubmit = (event) => {
        this.setState({ value: event.target.value })
    }
    render(){
        return (
            <div></div>
            )
        }
    }
    
    SearchBox.propTypes = {
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }
    // <Field>
    //     <Control iconLeft>
    //         <Input 
    //             placeholder="Search something" 
    //             value={this.state.value}
    //             onChange={this.handleSearchSubmit}
    //             />
    //         <Icon align="left" icon="search" />
    //     </Control>
    // </Field> 
            
// export default SearchBox
