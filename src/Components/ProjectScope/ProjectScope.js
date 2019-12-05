import React, {Component} from 'react';
//import FormGroup from "react-bootstrap/es/FormGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const initialState = {
    title: '',
    description: '',
    start_date: '',
    completed_by: '',
    project_purpose: '',
    project_description: '',
    desired_results: '',
    exclusions: '',
    communication_needs: '',
    acceptance_criteria: '',
    constraints: '',
    approvals: '',
    github_url: '',
    github_auth: ''
}

class ProjectScope extends Component{
    render() {
        const {project, onChange} = this.props;

        return (

            <Form>
                <Form.Group controlId="formProjectScope">
                    <Form.Row>
                        <Col>
                            <Form.Label> Project Name:</Form.Label>
                            <Form.Control
                                placeholder="Project name"
                                name="title"
                                value={project.title}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Projected start:</Form.Label>
                            <Form.Control
                                type="date"
                                name="start_date"
                                value={project.start_date}
                                onChange={onChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Completed by:</Form.Label>
                            <Form.Control
                                type="date"
                                name="completed_by"
                                value={project.completed_by}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>PROJECT PURPOSE:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="project_purpose"
                                value={project.project_purpose}
                                onChange={onChange}
                            />
                            <Form.Label>PROJECT DESCRIPTION:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="project_description"
                                value={project.project_description}
                                onChange={onChange}
                            />
                            <Form.Label>DESIRED RESULTS:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="desired_results"
                                value={project.desired_results}
                                onChange={onChange}
                            />
                            <Form.Label>EXCLUSIONS:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="exclusions"
                                value={project.exclusions}
                                onChange={onChange}
                            />
                            <Form.Label>COMMUNICATION NEEDS:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="communication_needs"
                                value={project.communication_needs}
                                onChange={onChange}
                            />
                            <Form.Label>ACCEPTANCE CRITERIA:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="acceptance_criteria"
                                value={project.acceptance_criteria}
                                onChange={onChange}
                            />
                            <Form.Label>CONSTRAINTS:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                autosize="true"
                                name="constraints"
                                value={project.constraints}
                                onChange={onChange}
                            />
                            <Form.Label>APPROVALS (signatures) :</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                autosize="true"
                                name="approvals"
                                value={project.approvals}
                                onChange={onChange}
                            />
                            <hr/>
                            <h4>Github</h4>
                            <Form.Label>Github URL</Form.Label>
                            <Form.Control
                                placeholder="Repository URL"
                                name="github_url"
                                value={project.github_url}
                                onChange={onChange}
                            />
                            <Form.Label>Github Auth</Form.Label>
                            <Form.Control
                                placeholder="Authentication token"
                                name="github_auth"
                                value={project.github_auth}
                                onChange={onChange}
                            />

                        </Col>
                    </Form.Row>
                </Form.Group>

            </Form>

        );
    }

}
export default ProjectScope;
