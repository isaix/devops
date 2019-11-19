import React, {Component} from 'react';
//import FormGroup from "react-bootstrap/es/FormGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


 class ProjectScope_Component extends Component{
    render() {
        return (
            <div>
                <h1>Project Scope Statement</h1>


                    <p>Is developed from Key-stakeholder interview.
                    </p>
                    <p>Every team member needs to sign the project scope statement.
                    </p>

                <Form>
                    <Form.Group controlId="formProjectScope">
                        <Row>
                                <Col>
                                    <Form.Label> Project Name:</Form.Label>
                                    <Form.Control placeholder="Project name"/>
                                </Col>
                                <Col>
                                    <Form.Label>Projected start:</Form.Label>
                                    <Form.Control type="date"/>
                                </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Completed by:</Form.Label>
                                <Form.Control type="date"/>
                            </Col>
                            <Col>
                                <Form.Label>Projected duration (in days):</Form.Label>
                                <Form.Control placeholder="duration" type="number"/>
                            </Col>
                        </Row>

                        <Col>
                            <Form.Label>PROJECT PURPOSE:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>PROJECT DESCRIPTION:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>DESIRED RESULTS:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>EXCLUSIONS:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>COMMUNICATION NEEDS:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>ACCEPTANCE CRITERIA:</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                            <Form.Label>CONSTRAINTS:</Form.Label>
                            <Form.Control as="textarea" rows="3" autosize="true"/>
                            <Form.Label>APPROVALS (signatures) :</Form.Label>
                            <Form.Control as="textarea" rows="3" autosize="true"/>

                        </Col>



                    </Form.Group>

                </Form>

            </div>
        );
    }

}
export default ProjectScope_Component;