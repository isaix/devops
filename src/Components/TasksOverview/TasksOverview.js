import {Button, Card, ListGroup, Nav, Navbar, Row,} from "react-bootstrap";
import React, {Component} from "react";
import {deleteTask, getTasks} from "../../Axios";
import TaskCreate from "../TaskCreate/TaskCreate";
//import "./ProjectStyle.css"

class TasksOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //TODO: big mistake
        if (this.state.tasks.length <= 0){
            this.updateTasks(this.props.id)
        }
    }

    updateTasks = (id) => {
        getTasks(id, tasks => this.setState({tasks}))
    };

    handleDelete = (id) => {
        deleteTask(this.props.id, id, call => {
            this.updateTasks(this.props.id);
        });
    }

    render (){
        const {tasks} = this.state;

        return (
            <>
                <h4>Tasks   <TaskCreate id={this.props.id} update={() => this.updateTasks(this.props.id)}/></h4>
                <ListGroup>
                    {tasks.map((task, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                <h5>{task.task_name}</h5>
                                <p>{task.task_id}</p>
                                <Button variant="outline-danger" onClick={() => this.handleDelete(task.task_id)}>Delete</Button>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </>
        );
    }
}

export default TasksOverview;
