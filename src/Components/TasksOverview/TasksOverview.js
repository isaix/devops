import {Button, Card, ListGroup, Nav, Navbar, Row,} from "react-bootstrap";
import React, {Component} from "react";
import {deleteTask, getTasks, updateTask} from "../../Axios";
import TaskCreate from "../TaskCreate/TaskCreate";
import Task from "../Task/Task";
//import "./ProjectStyle.css"

class TasksOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.id){
            this.updateTasks(nextProps.id)
        }
    }

    updateTasks = (id) => {
        getTasks(id, tasks => this.setState({tasks}))
    };

    handleDelete = (id) => {
        deleteTask(this.props.id, id, call => {
            this.updateTasks(this.props.id);
        });
    };

    handleSave = (task) => {
        updateTask(this.props.id, task, call => {
            console.log(task);
            this.updateTasks(this.props.id);
        })
    };

    render (){
        const {tasks} = this.state;

        return (
            <>
                <h4>Tasks   <TaskCreate id={this.props.id} update={() => this.updateTasks(this.props.id)}/></h4>
                <ListGroup>
                    {tasks.map((task, index) => {
                        return (
                            <Task task={task} key={index} save={this.handleSave} delete={() => this.handleDelete(task.task_id)}/>
                        );
                    })}
                </ListGroup>
            </>
        );
    }
}

export default TasksOverview;
