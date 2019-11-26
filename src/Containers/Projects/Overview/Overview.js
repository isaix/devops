import React, {Component} from 'react';
import ProjectStore from "../../../MobX/ProjectStore";
import Table from "react-bootstrap/Table";
import {createProject, deleteProject, getProjects} from "../../../Axios";
import Create from "../Create/Create";
//import "./OverviewStyles.css"
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
    };

    handleDelete = (id) => {
        deleteProject(id)
        //TODO: reload if successful
    };

    handleOpen = (id) => {
        this.props.history.push('/projects/'+id.toString());
    };

    render() {
        const {projects} = this.state;

        return (
            <Container>
                <Row>
                    <h1>Projects</h1>

                </Row>
                <Row>
                    {projects.map(project => (
                        <Col xs={2} key={project._id} className="column">
                            <Card>
                                <Card.Header as="h5">{project.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <ButtonGroup>
                                        <Button variant="primary" className="open_btn" onClick={() => this.handleOpen(project._id)}>Open</Button>
                                        <Button variant="danger" className="delete_btn" onClick={() => this.handleDelete(project._id)}>Delete</Button>
                                    </ButtonGroup>
                                </Card.Footer>
                            </Card>
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
