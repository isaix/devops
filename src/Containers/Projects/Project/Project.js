import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getProject} from "../../../Axios";
import Form from "../Create/Create";
import StakeholderOverview from "../../../Components/StakeholderOverview/StakeholderOverview";
import IssuesOverview from "../../../Components/IssuesOverview/IssuesOverview";
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
            );
        case 'tasks':
            return (
                <p>Her skal være tasks</p>
            );
        case 'issues':
            return (
                <IssuesOverview/>
            );
        case 'stakeholders':
            return (
                <StakeholderOverview/>
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
        const root = '/projects/' + project._id;

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
