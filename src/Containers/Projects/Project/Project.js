import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getProject} from "../../../Axios";
import Form from "../Create/Create";
import StakeholderOverview from "../../../Components/StakeholderOverview/StakeholderOverview";
import IssuesOverview from "../../../Components/IssuesOverview/IssuesOverview";
import TasksOverview from "../../../Components/TasksOverview/TasksOverview";
import ProjectOverview from "../../../Components/ProjectOverview/ProjectOverview";
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

function View({view, project}){
    switch (view) {
        case 'overview':
            return (
                <ProjectOverview project={project}/>
            );
        case 'tasks':
            return (
                <TasksOverview id={project._id}/>
            );
        case 'issues':
            return (
                <IssuesOverview id={project._id}/>
            );
        case 'stakeholders':
            return (
                <StakeholderOverview id={project._id}/>
            );
        default:
            return null;

    }
}

class Project extends Component{

    constructor(props) {
        super(props);
        this.state = {
            project: initialState,
            view: '/overview',
        }
    }

    componentDidMount() {
        let { id, view } = this.props.match.params;
        this.updateProject(id);
        this.setState({view});
    }

    updateProject = (id) => {
        getProject(id,project => this.setState({project}))
    };

    render (){
        const {project, view} = this.state;
        const root = '/' + project._id;

        return (
            <Card>
                <Card.Header>
                    <h1>{project.title}</h1>
                    <Navbar className={"project-navbar"} bg="light" variant="light">
                        <Navbar.Brand href={root + '/overview'}>Overview</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href={root + '/tasks'}>Tasks</Nav.Link>
                            <Nav.Link href={root + '/issues'}>Issues</Nav.Link>
                            <Nav.Link href={root + '/stakeholders'}>Stakeholders</Nav.Link>
                        </Nav>
                    </Navbar>
                </Card.Header>
                <Card.Body>
                    <View view={view} project={project}/>
                </Card.Body>
            </Card>
        );
    }
}

export default Project;
