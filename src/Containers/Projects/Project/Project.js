import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {deleteProject, getProject, updateProject} from "../../../Axios";
import StakeholderOverview from "../../../Components/StakeholderOverview/StakeholderOverview";
import IssuesOverview from "../../../Components/IssuesOverview/IssuesOverview";
import TasksOverview from "../../../Components/TasksOverview/TasksOverview";
import ProjectOverview from "../../../Components/ProjectOverview/ProjectOverview";
import {Redirect} from "react-router-dom";
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

    handleDelete = () => {
        deleteProject(this.state.project._id, call => {
            //Todo: return to projects tab
            this.props.history.goBack();
        });
    };

    handleSave = (project) => {
        updateProject(project, call => {
            this.updateProject(project._id)
            console.log(project)
            //TOdo: somehow this doesn't get updated on the backend..
        })
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
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link href={root + '/tasks'}>Tasks</Nav.Link>
                            <Nav.Link href={root + '/issues'}>Issues</Nav.Link>
                            <Nav.Link href={root + '/stakeholders'}>Stakeholders</Nav.Link>
                        </Nav>
                    </Navbar>
                </Card.Header>
                <Card.Body>
                    {(() => {
                            switch (view) {
                                case 'overview':
                                    return (
                                        <ProjectOverview project={project} save={this.handleSave} delete={this.handleDelete}/>
                                    );
                                case 'tasks':
                                    return (
                                        <TasksOverview id={project._id}/>
                                    );
                                case 'issues':
                                    return (
                                        <IssuesOverview project={project}/>
                                    );
                                case 'stakeholders':
                                    return (
                                        <StakeholderOverview id={project._id}/>
                                    );
                                default:
                                    return null;
                            }
                        }
                    )()}
                </Card.Body>
            </Card>
        );
    }
}

export default Project;
