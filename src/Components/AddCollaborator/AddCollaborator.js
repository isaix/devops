import React, {Component} from 'react';
import {addProjectCollab} from "../../Axios";
import {OverlayTrigger, Tooltip, Form, Modal, Button} from "react-bootstrap";

class AddCollaborator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collaborator: '',
            show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({collaborator: {...this.state.collaborator, [e.target.name]: e.target.value}})
    }


    handleOpen = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleNewCollab = (id, collab) => {
        addProjectCollab(id, collab, (err, collab) => {
            if (err) {}
            this.setState({
                show: false,
                collaborator: ''
            })
            this.props.update && this.props.update()
        })
    }


    render() {
        const {collaborator, show} = this.state;

        return (
            <>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            Add new collaborator
                        </Tooltip>
                    }
                >
                    <Button onClick={this.handleOpen} variant="outline-primary">+ Add collab</Button>
                </OverlayTrigger>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new collaborator</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="collaborator"
                                    value={collaborator[collaborator]}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleNewCollab(this.props.id, collaborator)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default AddCollaborator
