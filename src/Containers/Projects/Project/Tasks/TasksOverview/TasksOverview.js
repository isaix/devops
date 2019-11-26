import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getProject} from "../../../Axios";
import Form from "../Create/Create";
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
}

class TasksOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount() {
        this.updateTasks();
    }

    updateTasks = (id) => {
        getProject(id,project => this.setState({project}))
    };

    render (){

        return (
            <>

            </>
        );
    }
}

export default TasksOverview;
