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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.tasks.length <= 0){
            this.updateTasks(this.props.id)
        }
    }

    updateTasks = (id) => {
        getTasks(id, tasks => this.setState({tasks}))
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
