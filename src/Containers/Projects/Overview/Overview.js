import React, {Component} from 'react';
import ProjectStore from "../../../MobX/ProjectStore";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {createProject, deleteProject, getProjects} from "../../../Axios";
import Create from "../Create/Create";

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
                    <Table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map(project => (
                            <tr key={project._id}>
                                <th>{project.title} </th>
                                <th>{project.description}</th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>

                <Create update={this.updateProjects}/>

            </Container>

        )
    }

}

export default Overview
