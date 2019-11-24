import React, {Component} from 'react';
import {Button, Card, Col, Container, FormLabel, FormControl, FormGroup, Navbar, Row} from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit(event){
        console.log(this.state.email);
        console.log(this.state.password);

        event.preventDefault();
    }

    validateForm(){
        return true;
    }

    setEmail(value){
        this.setState({password : value});
    }

    setPassword(value){
        this.setState({email : value});
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
                                <form onSubmit={this.handleSubmit.bind(this)} style="width:80%">
                                    <FormGroup controlId="email" size="large">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl
                                            autoFocus
                                            type="email"
                                            value={this.email}
                                            onChange={e => this.setEmail(e.target.value)}
                                            />
                                    </FormGroup>
                                    <FormGroup controlId="password" size="large">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl
                                            value={this.password}
                                            onChange={e => this.setPassword(e.target.value)}
                                            type="password"
                                            />
                                    </FormGroup>
                                    <Button block size="large" disabled={!this.validateForm()} type="submit">
                                        Login
                                    </Button>
                                </form>
                            </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Login