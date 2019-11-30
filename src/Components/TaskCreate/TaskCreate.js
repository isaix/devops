import React, {Component} from 'react';
import {createTask} from "../../Axios";
import {OverlayTrigger, Tooltip, Form, Modal, Button} from "react-bootstrap";

const initialState = {
    task_id: '',
    task_name: ''
}

class TaskCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: initialState,
            show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({task: {...this.state.task, [e.target.name]: e.target.value}})
    }


    handleOpen = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleCreate = (task) => {
        createTask(this.props.id, task, (err, task) => {
            if (err) {}
            this.setState({
                show: false,
                task: initialState
            })
            this.props.update && this.props.update()
        })

    }


    render() {
        const {task, show} = this.state;

        return (
            <>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            Create new Task
                        </Tooltip>
                    }
                >
                    <Button onClick={this.handleOpen} variant="outline-primary">+</Button>
                </OverlayTrigger>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control
                                    name="task_name"
                                    value={task.task_name}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleCreate(task)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default TaskCreate
