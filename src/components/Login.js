import React, {Component} from 'react'
import { Form, Button, Modal, Tabs, Tab, Row, Col } from 'react-bootstrap'
import SignForm from './SignForm'
import '../static/scss/Login.scss'
class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            is_loading: false,
            userName: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmedEmail: false,
            confirmedPassword: false,
           
        }
    }

    handleConfirmPassword = event => this.setState({confirmedPassword: (event.target.value === this.state.password) ? true : false})
    handleConfirmEmail = event => this.setState({confirmedEmail: (event.target.value === this.state.email) ? true : false})
    handleChange = event => this.setState({[event.target.name]: event.target.value})
    resetForm = event => this.setState({email: "",userName: "",password: "",login:""})
    
    submitForm = (type, event) => {
        console.log(type)
        // if (true){
        //     fetch('http://localhost:5000/users/create', {
        //         method: "POST",
        //         body: JSON.stringify({
        //             "email": this.state.email,
        //             "password": this.state.password,
        //             "username": this.state.username,
        //         }),
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept-Encoding": "gzip , deflate, br",
        //             "sec-fetch-mode": "no-cors",
        //             "Access-Control-Request-Headers": "content-type",
        //             "Access-Control-Request-Method": "POST",
        //             "Access-Control-Allow-Origin": "*"
        //         }
        //     }).then(response => response.json()).then(response => {
        //         console.table(response)
        //         let token = response.Authorization
        //         console.log(token)
        //     })
        // }
        // else{
        //     fetch('http://localhost:5000/auth/login', {
        //         method: "POST",
        //         body: JSON.stringify({
        //             "email": this.state.email,
        //             "password": this.state.password
        //         }),
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept-Encoding": "gzip , deflate, br",
        //             "sec-fetch-mode": "no-cors",
        //             "Access-Control-Request-Headers": "content-type",
        //             "Access-Control-Request-Method": "POST",
        //             "Access-Control-Allow-Origin": "*"
        //         }
        //     }).then(response => response.json()).then(response => {
        //         console.table(response)
        //         let token = response.Authorization
        //         console.log(token)
        //     })
        // }
    }

    render(){
        return(
            <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter">
                <Tabs defaultActiveKey="signin" id="uncontrolled-sign-tab">
                    <Tab className="sign-tab-header" eventKey="signin" title="Sign In">
                        <SignForm 
                            type="signin" 
                            confirmedEmail={this.state.confirmedEmail}
                            confirmedPassword={this.state.confirmedPassword}
                            handleConfirmEmail={this.handleConfirmEmail}
                            handleConfirmPassword={this.handleConfirmPassword}
                            handleChange={this.handleChange} 
                            submitForm={this.submitForm}
                            resetForm={this.resetForm}
                            />
                            </Tab>    
                            <Tab className="sign-tab-header" eventKey="signup" title="Sign Up">
                            <SignForm 
                            type="signup" 
                            confirmedEmail={this.state.confirmedEmail}
                            email={this.state.email}
                            password={this.state.password}
                            confirmedPassword={this.state.confirmedPassword}
                            handleConfirmEmail={this.handleConfirmEmail}
                            handleConfirmPassword={this.handleConfirmPassword}
                            handleChange={this.handleChange} 
                            submitForm={this.submitForm}
                            resetForm={this.resetForm}
                        />
                    </Tab>
                </Tabs> 
            </Modal.Dialog>

        );
    }
}

export default Login