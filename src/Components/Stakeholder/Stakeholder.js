import React, {Component} from "react";
import {Button, ButtonGroup, Card, Form, ListGroup, Modal} from "react-bootstrap";

const initialState = {
    stakeholder_id: '',
    stakeholder_name: '',
    stakeholder_type: '',
    stakeholder_interest: ''
};

class Stakeholder extends Component{
    constructor(props){
        super(props);
        this.state = {
            stakeholder: initialState,
            show: false,
            edit: false,
        }
    }

    handleChange = (e) => {
        console.log(e.target);
        this.setState({stakeholder: {...this.state.stakeholder, [e.target.name]: e.target.value}})
    };


    handleOpen = () => {
        this.setState({show: true});
        this.setState({stakeholder: this.props.stakeholder});
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

    handleSave = (stakeholder) => {
        this.props.save(stakeholder);
        this.handleClose();
    };

    render(){
        const {stakeholder} = this.props;
        const {show, edit} = this.state;

        return (
            <>
                <Card className="overview_card" onClick={this.handleOpen} >
                    <Card.Header as="h6">{stakeholder.stakeholder_name}</Card.Header>
                    <Card.Body>
                        <Card.Text>{stakeholder.stakeholder_interest}</Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{stakeholder.stakeholder_name}</Modal.Title>
                        <ButtonGroup style={{marginLeft: "20px", marginBottom: "5px"}}>
                            <Button variant="outline-secondary" onClick={this.handleEdit}>Edit</Button>
                            <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
                        </ButtonGroup>
                    </Modal.Header>
                    <Modal.Body>
                        <View edit={edit} stakeholder={this.state.stakeholder} onChange={this.handleChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        {
                            edit && <Button variant="primary" onClick={() => this.handleSave(this.state.stakeholder)}>
                                Save
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

function View ({edit, stakeholder, onChange}){
    if (edit){
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                        name="stakeholder_name"
                        value={stakeholder.stakeholder_name}
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
                <p>{stakeholder.stakeholder_name}</p>
            </div>
        );
    }
}

export default Stakeholder;
