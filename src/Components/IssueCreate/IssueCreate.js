import React, {Component} from 'react';
import {createIssue} from "../../Axios";
import {OverlayTrigger, Tooltip, Form, Modal, Button} from "react-bootstrap";

const initialState = {
    issue_title: '',
    issue_description: ''
}

class IssueCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issue: initialState,
            show: false
        }
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({issue: {...this.state.issue, [e.target.name]: e.target.value}})
    }


    handleOpen = () => {
        this.setState({show: true})
    };

    handleClose = () => {
        this.setState({show: false})
    };

    handleCreate = (issue) => {
        createIssue(this.props.project, issue, (err, issue) => {
            if (err) {}
            this.setState({
                show: false,
                issue: initialState
            })
            this.props.update && this.props.update()
        })

    }


    render() {
        const {issue, show} = this.state;

        return (
            <>
                <OverlayTrigger
                    placement="right"
                    overlay={
                        <Tooltip>
                            Create new issue
                        </Tooltip>
                    }
                >
                    <Button onClick={this.handleOpen} variant="outline-primary">+</Button>
                </OverlayTrigger>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Issue</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {Object.keys(issue).map((key) => {
                                return (
                                    <Form.Group key={key}>
                                        <Form.Label>{key.replace("_", " ").capitalize()}</Form.Label>
                                        <Form.Control
                                            name={key}
                                            value={issue[key]}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                )
                            })}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleCreate(issue)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default IssueCreate
