import React, {Component} from 'react';
import ProjectStore from "../../../MobX/ProjectStore";
import Table from "react-bootstrap/Table";
import {createProject, deleteProject, getProjects} from "../../../Axios";
import Create from "../Create/Create";
import "./OverviewStyles.css"
import {Card, Col, Button, ButtonGroup, Container, Row} from "react-bootstrap";

class Overview extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        this.updateProjects()
    };

    updateProjects = () => {
        getProjects(projects => this.setState({projects}))
        console.log(this.state.projects);
    };

    handleDelete = (id) => {
        deleteProject(id)
        //TODO: reload if successful
    };

    handleOpen = (id) => {
        this.props.history.push('/'+id.toString()+'/overview');
    };

    render() {
        const {projects} = this.state;

        return (
            <Container className="overview_container">
                <Row>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    {projects.map(project => (
                        <Card key={project._id} className="overview_card" onClick={() => this.handleOpen(project._id)}>
                            <Card.Header as="h6">{project.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    <Create update={this.updateProjects}/>
                </Row>
            </Container>

        )
    }

}

export default Overview
