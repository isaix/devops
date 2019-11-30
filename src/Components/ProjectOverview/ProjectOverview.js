import {ListGroup, Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import React, {Component} from "react";
import {deleteProject} from "../../Axios";

class ProjectOverview extends Component{

    constructor(props) {
        super(props);
    }

    handleDelete = (id) => {
        //deleteProject(id)
        //TODO: close if successful
    };

    handleEdit = (project) => {
        
    }

    render (){
        const {project} = this.props;

        return (
            <>
                <ButtonToolbar>
                    <h4>Overview</h4>
                    <ButtonGroup style={{marginLeft: "20px", marginBottom: "5px"}}>
                        <Button variant="outline-secondary">Edit</Button>
                        <Button variant="outline-danger" onClick={() => this.handleDelete(project._id)}>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <ListGroup variant="flush">
                    {Object.keys(project).map((key) => {
                        if (!Array.isArray(project[key]) && key !== "title" && key !== "__v"){
                            return (
                                <ListGroup.Item key={key}>
                                    <h6>{key.replace("_", " ").capitalize()}</h6>
                                    <p>{project[key]}</p>
                                </ListGroup.Item>
                            )
                        }
                    })}
                </ListGroup>
            </>
        );
    }
}

export default ProjectOverview;
