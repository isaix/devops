import React, {Component} from 'react';
import {createProject} from "../../../Axios";
import {Card, Button, Modal, Form} from "react-bootstrap";

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

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: initialState,
            show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({project: {...this.state.project, [e.target.name]: e.target.value}})
    }


    handleOpen = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleCreate = (project) => {
        createProject(project, (err, project) => {
            if (err) {}
            this.setState({
                show: false,
                project: initialState
            })
            this.props.update && this.props.update()
        })

    }


    render() {
        const {project, show} = this.state;
        const {updateProjects} = this.props
        return (
            <>

                <Button className="overview_create" variant="outline-primary" onClick={this.handleOpen}><h1 >+</h1></Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {Object.keys(project).map((key) => {
                                return (
                                    <Form.Group key={key}>
                                        <Form.Label>{key.replace("_", " ").capitalize()}</Form.Label>
                                        <Form.Control
                                            name={key}
                                            value={project[key]}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                )
                            })}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleCreate(project)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default Create
