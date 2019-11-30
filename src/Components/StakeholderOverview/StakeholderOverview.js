import React, {Component} from 'react';
import StakeholderStore from "../../MobX/StakeholderStore";
import {Badge, Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";

class StakeholderOverview extends Component{

    constructor(props){
        super(props)
        this.state = {
            stakeholders: new StakeholderStore().getStakeholders(),
        }
    }

    render(){
        const {stakeholders} = this.state;

        return (

            <Container>
                <Row>
                    <Col>
                        <Button variant="outline-primary">Add +</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Key stakeholders:</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Container className="overview_container">
                        <Row>
                            <KeyStakeholders stakeholders={stakeholders}/>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Col>
                        <h4>Stakeholders:</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Container className="overview_container">
                        <Row>
                            <Stakeholders stakeholders={stakeholders}/>
                        </Row>
                    </Container>
                </Row>
            </Container>

        )
    }
}

function KeyStakeholders({stakeholders}){
    return (
        <>
            {stakeholders.map((stakeholder, index) => {
                if (stakeholder.keyStakeHolder)
                    return (
                        <Card key={index} className="overview_card" >
                            <Card.Header as="h6">{stakeholder.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{stakeholder.mail}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
            })}
        </>
    );
}

function Stakeholders({stakeholders}){
    return (
        <>
            {stakeholders.map((stakeholder, index) => {
                if (!stakeholder.keyStakeHolder)
                    return (
                        <Card key={index} className="overview_card" >
                            <Card.Header as="h6">{stakeholder.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{stakeholder.mail}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
            })}
        </>
    );
}
export default StakeholderOverview
