import React, {Component} from "react";
import {Button, ButtonGroup, Form, ListGroup, Modal} from "react-bootstrap";
import "./TaskStyle.css"
const initialState = {
    task_id: '',
    task_name: ''
}

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: initialState,
            show: false,
            edit: false,
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({task: {...this.state.task, [e.target.name]: e.target.value}})
    };


    handleOpen = () => {
        this.setState({show: true})
        this.setState({task: this.props.task});
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleEdit = () => {
        this.setState({edit: !this.state.edit})
    };

    handleDelete = () => {
        this.props.delete();
        this.handleClose();
    };

    handleSave = (task) => {
        this.props.save(task);
        this.handleClose();
    };

    render(){
        const {task} = this.props;
        const {show, edit} = this.state;

        return (
            <>
                <ListGroup.Item onClick={this.handleOpen} className="task_item">
                    <h5>{task.task_name}</h5>
                    <p>{task.task_id}</p>
                </ListGroup.Item>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Task #{task.task_id}</Modal.Title>
                        <ButtonGroup style={{marginLeft: "20px", marginBottom: "5px"}}>
                            <Button variant="outline-secondary" onClick={this.handleEdit}>Edit</Button>
                            <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
                        </ButtonGroup>
                    </Modal.Header>
                    <Modal.Body>
                        <View edit={edit} task={this.state.task} onChange={this.handleChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        {
                            edit && <Button variant="primary" onClick={() => this.handleSave(this.state.task)}>
                                Save
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

function View ({edit, task, onChange}){
    if (edit){
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                        name="task_name"
                        value={task.task_name}
                        onChange={onChange}
                    />
                </Form.Group>
            </Form>
        );
    }
    else {
        return (
            <div>
                <h5>Task Name</h5>
                <p>{task.task_name}</p>
            </div>
        );
    }
}

export default Task;
