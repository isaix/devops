import {Button, Card, Col, Container, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getProject} from "../../../Axios";

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
    approvals: ''
}

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {
            project: initialState,
        }
    }

    componentDidMount() {
        this.updateProject(this.props.match.params.id);
    }

    updateProject = (id) => {
        getProject(id,project => this.setState({project}))
    };

    render (){
        const {project} = this.state;

        return (
            <Container>
                <Row>
                    {project.title}
                </Row>
                <Row>
                    <Col>
                        <h1>Tasks</h1>
                    </Col>
                    <Col>
                        <h1>Issues</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Get the tasks
                    </Col>
                    <Col>
                        Get The issues
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary">Add Task</Button>
                    </Col>
                    <Col>
                        <Button variant="primary">Add Issue</Button>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Project;
