import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";




class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Login</Card.Header>
                            <Card.Body>
                                <Card.Title>Login title</Card.Title>
                                <Card.Text>
                                    Login content text
                                </Card.Text>
                                <Button variant="primary">Login Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        )
    }

}

export default Login