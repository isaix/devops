import React, {Component} from 'react';
import ProjectStore from "../../../MobX/ProjectStore";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {createProject, deleteProject, getProjects} from "../../../Axios";
import Create from "../Create/Create";
import Col from "react-bootstrap/Col";
import "./OverviewStyles.css"

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
    };

    handleDelete = () => {
        deleteProject()
    }

    render() {
        const {projects} = this.state;

        return (
            <Container>
                <Row>
                    <h1>Projects</h1>
                </Row>
                <Row>
                    {projects.map(project => (
                        <Col xs={2} key={project._id} className="project">
                            <h6>{project.title}</h6>
                            <p>{project.description}</p>
                            <Button variant="danger">Delete</Button>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Create update={this.updateProjects}/>
                </Row>
            </Container>

        )
    }

}

export default Overview
