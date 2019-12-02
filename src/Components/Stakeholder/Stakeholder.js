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
        this.setState({show: false, edit: false})
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
                        <Card.Title as="u">Interest:</Card.Title>
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
                    {Object.keys(stakeholder).map((key) => {
                        if (!key.includes('id')){
                            return (
                                <Form.Group key={key}>
                                    <Form.Label>{key.replace("_", " ").capitalize()}</Form.Label>
                                    {key.includes('type') ? (
                                        <Form.Control
                                            as="select"
                                            name={key}
                                            value={stakeholder[key]}
                                            onChange={onChange}
                                        >
                                            <option>primary</option>
                                            <option>secondary</option>
                                        </Form.Control>
                                    ) : (
                                        <Form.Control
                                            name={key}
                                            value={stakeholder[key]}
                                            onChange={onChange}
                                        />
                                    )}
                                </Form.Group>
                            )
                        }
                    })}
                </Form.Group>
            </Form>
        );
    }
    else {
        return (
            Object.keys(stakeholder).map((key) => {
                if (!key.includes('name')){
                    return (
                        <div key={key}>
                            <h5>{key.replace("_", " ").capitalize()}</h5>
                            <p>{stakeholder[key]}</p>
                        </div>
                    )
                }
            })
        );
    }
}

export default Stakeholder;
