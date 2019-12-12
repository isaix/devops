import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import './HeaderStyles.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    logout(){
        sessionStorage.removeItem("token")
        window.location.href = "https://dtu-devops-app.herokuapp.com/login";
    }

    render() {
        return (
            <Container className={"header-container"} fluid={true}>
                <Row>
                    <Navbar className={"header-navbar"} bg="primary" variant="dark">
                        <Navbar.Brand href="/">React App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>

                        </Nav>

                        <Form inline>
                            <Button variant="outline-light" onClick={() => this.logout()}>Log out</Button>
                        </Form>
                    </Navbar>
                </Row>
            </Container>
        )
    }



}

export default Header
