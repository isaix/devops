import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getIssues} from "../../../Axios";
import Form from "../Create/Create";
//import "./ProjectStyle.css"

const initialState = {
    title: '',
    number: '',
    body: '',
    state: ''
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
        getTasks(id,project => this.setState({project}))
    };

    render (){

        return (
            <>

            </>
        );
    }
}

export default TasksOverview;
