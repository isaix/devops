import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";

class KeyStakeholderInterview extends Component {
    renderQuestion(text, rows){
        return (
            <KeyStakeholderInterviewQuestion
                text={text}
                rows={rows}
            />
        );
    }

    render() {
        return (
            <div>
                <Form>
                    {this.renderQuestion('Question 1', 1)}
                    {this.renderQuestion('Question 2', 3)}
                    {this.renderQuestion('Question 3', 1)}
                    {this.renderQuestion('Question 4', 5)}
                    <Button
                        variant="primary"
                        type="submit">
                        Next
                    </Button>
                </Form>
            </div>
        );
    }
}

function KeyStakeholderInterviewQuestion(props) {
    return (
        <Form.Group>
            <Form.Label>{props.text}</Form.Label>
            <Form.Control as="textarea" rows={props.rows}/>
        </Form.Group>
    );
}

export default KeyStakeholderInterview;
