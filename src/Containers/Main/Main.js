import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import './MainStyles.css'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Main</Card.Header>
                            <Card.Body>
                                <Card.Title>Main title</Card.Title>
                                <Card.Text>
                                    Main content text
                                </Card.Text>
                                <Button variant="primary">Main Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        )
    }

}

export default Main