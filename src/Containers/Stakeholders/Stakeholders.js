import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";




class Stakeholders extends Component {
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
                                <Card.Title>Stakeholders</Card.Title>
                                <Card.Text>
                                    Stakeholder Overview
                                </Card.Text>
                                <Button variant="primary" href={"stakeholders/interview"}>Interview</Button>
                                <Button variant="primary" href={"stakeholders/identification"}>Identification</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        )
    }

}

export default Stakeholders