import React, {Component} from 'react';
import {Button, Card, Col, Container, FormLabel,Form, FormControl, FormGroup, Navbar, Row} from "react-bootstrap";
import {createUser} from "../../Axios";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            repeatPassword: "",
            showError: false,
            errormessage: ""
        }
    }

    handleSubmit(event){

        event.preventDefault();
        if(!this.state.email.match(/.+@.+/)){
            this.setState({errorMessage: "Please enter a valid email adress", showError: true})
            return false
        } else if(this.state.password.length < 8){
            this.setState({errorMessage: "Your password must be over 8 characters long", showError: true})
            return false
        }  else if(this.state.password !== this.state.repeatPassword){
            this.setState({errorMessage: "Please make sure that your passwords match", showError: true})
            return false
        } else{
            createUser(this.state.email, this.state.password, this.state.repeatPassword, res => {
                if(res.status !== null && res.status === 201){
                    this.props.history.push('login');
                    return;
                } else if(res.message.includes('409')){
                    this.setState({errorMessage: "A user with this email already exists", showError: true})
                    return;
                } else {
                    this.setState({errorMessage: "Something went wrong", showError: true})
                    return;
                }
            })
        }

    }

    setEmail(value){
        this.setState({email : value});
    }

    setPassword(value){
        this.setState({password : value});
    }

    setRepeatPassword(value){
        this.setState({repeatPassword : value})
    }




    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Card>
                            {/*Tyvstjålet kode*/}
                            <div className="Login">
                                <Form style={{marginRight: 2 + 'em'}}>
                                    <FormGroup controlId="email" size="large">
                                        <FormLabel column={1}>Email</FormLabel>
                                        <FormControl
                                            autoFocus
                                            type="email"
                                            value={this.email}
                                            onChange={e => this.setEmail(e.target.value)}
                                            />
                                    </FormGroup>
                                    <FormGroup controlId="password" size="large">
                                        <FormLabel column={1}>Password</FormLabel>
                                        <FormControl
                                            value={this.password}
                                            onChange={e => this.setPassword(e.target.value)}
                                            type="password"
                                            />
                                    </FormGroup>
                                    <FormGroup controlId="password" size="large">
                                        <FormLabel column={1}>Repeat Password</FormLabel>
                                        <FormControl
                                            value={this.repeatPassword}
                                            onChange={e => this.setRepeatPassword(e.target.value)}
                                            type="password"
                                            />
                                    </FormGroup>
                                    <Button block size="large"  type="submit" onClick={this.handleSubmit.bind(this)}>
                                        Login
                                    </Button>
                                </Form>
                                {
                                    this.showError()
                                }
                                <a href="#" className="" onClick={ () => {this.props.history.push('login')}}>Already have an account? Log in here</a>
                            </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    showError(){
        if(this.state.showError){
            return( <div className = "alert alert-danger" role="alert">{this.state.errorMessage}</div>)
        } else{
            return;
        }
    }



}

export default Signup