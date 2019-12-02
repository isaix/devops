import React, {Component} from 'react';
import {Badge, Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import Stakeholder from "../Stakeholder/Stakeholder"
import {deleteStakeholder, getStakeholders, updateStakeholder} from "../../Axios";
import StakeholderCreate from "../StakeholderCreate/StakeholderCreate";

class StakeholderOverview extends Component{

    constructor(props){
        super(props)
        this.state = {
            stakeholders: [],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.id){
            this.updateStakeholders(nextProps.id)
        }
    }

    updateStakeholders = (id) => {
        getStakeholders(id, stakeholders => this.setState({stakeholders}))
    };

    handleDelete = (id) => {
        deleteStakeholder(this.props.id, id, call => {
            this.updateStakeholders(this.props.id);
        });
    };

    handleSave = (stakeholder) => {
        updateStakeholder(this.props.id, stakeholder, call => {
            this.updateStakeholders(this.props.id);
        })
    };

    render(){
        const {stakeholders} = this.state;

        return (

            <Container>
                <Row>
                    <Col>
                        <StakeholderCreate id={this.props.id} update={() => this.updateStakeholders(this.props.id)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Primary stakeholders:</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Container className="overview_container">
                        <Row>
                            {stakeholders.map((stakeholder, index) => {
                                if (stakeholder.stakeholder_type === 'primary'){
                                    return (
                                        <Stakeholder
                                            key={index}
                                            stakeholder={stakeholder}
                                            save={this.handleSave}
                                            delete={() => this.handleDelete(stakeholder.stakeholder_id)}
                                        />
                                    );
                                }
                            })}
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Col>
                        <h4>Secondary stakeholders:</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Container className="overview_container">
                        <Row>
                            {stakeholders.map((stakeholder, index) => {
                                if (stakeholder.stakeholder_type === 'secondary'){
                                    return (
                                        <Stakeholder
                                            key={index}
                                            stakeholder={stakeholder}
                                            save={this.handleSave}
                                            delete={() => this.handleDelete(stakeholder.stakeholder_id)}
                                        />
                                    );
                                }
                            })}
                        </Row>
                    </Container>
                </Row>
            </Container>

        )
    }
}

export default StakeholderOverview
