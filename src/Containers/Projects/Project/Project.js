import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getProject} from "../../../Axios";
import Form from "../Create/Create";
//import "./ProjectStyle.css"

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
};

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
            <Card>
                <Card.Header>
                    <h1>{project.title}</h1>
                    <Navbar className={"project-navbar"} bg="light" variant="light">
                        <Navbar.Brand href={"/projects/" + project._id}>Overview</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#tasks">Tasks</Nav.Link>
                            <Nav.Link href="#issues">Issues</Nav.Link>
                            <Nav.Link href="#stakeholders">Stakeholders</Nav.Link>
                        </Nav>
                    </Navbar>
                </Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        {Object.keys(project).map((key) => {
                            return (
                                <ListGroup.Item key={key}>
                                    <h6>{key.replace("_", " ").capitalize()}</h6>
                                    <p>{project[key]}</p>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default Project;
