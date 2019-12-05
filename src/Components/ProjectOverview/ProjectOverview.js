import {ListGroup, Button, ButtonGroup, ButtonToolbar, Form} from "react-bootstrap";
import React, {Component} from "react";
import {deleteProject} from "../../Axios";
import ProjectScope from "../ProjectScope/ProjectScope";

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

class ProjectOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            project: initialState
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.project){
            this.setState({project: nextProps.project});
        }
    }

    handleChange = (e) => {
        console.log(e.target);
        this.setState({project: {...this.state.project, [e.target.name]: e.target.value}})
    };

    handleEdit = () => {
        this.setState({edit: !this.state.edit})
        if (this.state.edit)
            this.setState({project: this.props.project})
    };

    handleDelete = () => {
        this.props.delete();
    };

    handleSave = () => {
        this.props.save(this.state.project);
        this.handleEdit();
    };

    render (){
        const {edit, project} = this.state;

        return (
            <>
                <ButtonToolbar>
                    <h4>Overview</h4>
                    <ButtonGroup style={{marginLeft: "20px", marginBottom: "5px"}}>
                        <Button variant="outline-secondary" onClick={this.handleEdit}>Edit</Button>
                        <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                {edit ? (
                    <div>
                        <ProjectScope project={project} onChange={this.handleChange}/>
                        <hr/>
                        <Button variant="secondary" onClick={this.handleEdit}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                            Save
                        </Button>
                    </div>

                ) : (
                    <ListGroup variant="flush">
                        {Object.keys(project).map((key) => {
                            if (!Array.isArray(project[key]) && key !== "title" && key !== "__v" && key !== "description"){
                                return (
                                    <ListGroup.Item key={key}>
                                        <h6>{key.replace("_", " ").capitalize()}</h6>
                                        <p>{project[key]}</p>
                                    </ListGroup.Item>
                                )
                            }
                        })}
                    </ListGroup>
                )}
            </>
        );
    }
}

export default ProjectOverview;
