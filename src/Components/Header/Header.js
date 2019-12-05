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
                            <Nav.Link href="/stakeholders">Stakeholders</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/stakeholders/identification">StakeHolderIdentification</Nav.Link>
                            <Nav.Link href="/stakeholders/interview">KeyStakeholderInterview</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/projects/scope">Scope</Nav.Link>

                        </Nav>

                        <Form inline>
                            <Button variant="outline-light" onClick={() => sessionStorage.removeItem("token")}>Log out</Button>
                        </Form>
                    </Navbar>
                </Row>
            </Container>
        )
    }

}

export default Header