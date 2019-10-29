import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import './HeaderStyles.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container className={"header-container"} fluid={true}>
                <Row>
                    <Navbar className={"header-navbar"} bg="primary" variant="dark">
                        <Navbar.Brand href="/">React App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="stakeholders">Stakeholders</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                        </Nav>

                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                </Row>
            </Container>
        )
    }

}

export default Header