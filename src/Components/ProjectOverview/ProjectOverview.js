import {ListGroup,} from "react-bootstrap";
import React, {Component} from "react";

class ProjectOverview extends Component{

    constructor(props) {
        super(props);
    }

    render (){
        const {project} = this.props;

        return (
            <>
                <h4>Overview</h4>
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
            </>
        );
    }
}

export default ProjectOverview;
