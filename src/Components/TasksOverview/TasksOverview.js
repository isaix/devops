import {Button, Card, ListGroup, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import {getTasks} from "../../Axios";
//import "./ProjectStyle.css"

class TasksOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount() {
        //this.updateTasks();
    }

    updateTasks = (id) => {
        getTasks(id,project => this.setState({project}))
    };

    render (){

        return (
            <>
                <h4>Tasks</h4>
            </>
        );
    }
}

export default TasksOverview;
