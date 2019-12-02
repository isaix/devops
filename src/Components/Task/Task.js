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
        this.setState({show: false, edit: false})
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
                    <p>{task.task_description}</p>
                </ListGroup.Item>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{task.task_name}</Modal.Title>
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
            Object.keys(task).map((key) => {
                    if (!key.includes('id')){
                        return (
                            <Form.Group key={key}>
                                <Form.Label>{key.replace("_", " ").capitalize()}</Form.Label>
                                <Form.Control
                                    name={key}
                                    value={task[key]}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        )
                    }
                })
        );
    }
    else {
        return (
            Object.keys(task).map((key) => {
                    if (!key.includes('name')){
                        return (
                            <div key={key}>
                                <h5>{key.replace("_", " ").capitalize()}</h5>
                                <p>{task[key]}</p>
                            </div>
                        )
                    }
                })

        );
    }
}

export default Task;
