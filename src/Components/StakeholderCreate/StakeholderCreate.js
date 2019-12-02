import React, {Component} from 'react';
import {createStakeholder} from "../../Axios";
import {OverlayTrigger, Tooltip, Form, Modal, Button} from "react-bootstrap";

const initialState = {
    stakeholder_id: '',
    stakeholder_name: '',
    stakeholder_type: '',
    stakeholder_interest: ''
};

class StakeholderCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stakeholder: initialState,
            show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({stakeholder: {...this.state.stakeholder, [e.target.name]: e.target.value}})
    }


    handleOpen = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleCreate = (stakeholder) => {
        createStakeholder(this.props.id, stakeholder, (err, stakeholder) => {
            if (err) {}
            this.setState({
                show: false,
                stakeholder: initialState
            })
            this.props.update && this.props.update()
        })

    }


    render() {
        const {stakeholder, show} = this.state;

        return (
            <>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            Create new stakeholder
                        </Tooltip>
                    }
                >
                    <Button onClick={this.handleOpen} variant="outline-primary">New +</Button>
                </OverlayTrigger>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create stakeholder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                                                onChange={this.handleChange}
                                            >
                                                <option>primary</option>
                                                <option>secondary</option>
                                            </Form.Control>
                                        ) : (
                                            <Form.Control
                                                name={key}
                                                value={stakeholder[key]}
                                                onChange={this.handleChange}
                                            />
                                        )}
                                    </Form.Group>
                                )
                            }
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleCreate(stakeholder)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default StakeholderCreate
