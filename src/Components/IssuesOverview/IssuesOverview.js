import {ListGroup, Badge, Container, Col, Row, Button} from "react-bootstrap";
import React, {Component} from "react";
import {closeIssue, getIssues} from "../../Axios";
import IssueCreate from "../IssueCreate/IssueCreate";
import "./IssuesOverviewStyle.css"

const initialState = {
    total_count: '',
    incomplete_results: '',
    items: []
}

class IssuesOverview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.project){
            this.updateIssues(nextProps.project);
        }
    }

    updateIssues = (project) => {
        getIssues(project,call => {
            let issues = call.items;
            this.setState({issues});
        })
    };

    handleClose = (number) => {
        closeIssue(this.props.project, {issue_number: number,}, call => {
            this.updateIssues(this.props.project);
        })
    };

    render (){
        const {issues} = this.state;

        return (
            <Container>
                <Row>

                    <Col>
                        <h3>Issues    <IssueCreate update={() => this.updateIssues(this.props.project)} project={this.props.project}/></h3>
                    </Col>
                </Row>
                <hr/>

                <Row>
                    <Col>
                        <h5>Open:</h5>
                        <OpenIssues issues={issues} handleClose={this.handleClose}/>
                    </Col>
                    <div className="issues_vert_line"/>
                    <Col>
                        <h5>Closed:</h5>
                        <ClosedIssues issues={issues}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function OpenIssues({issues, handleClose}) {
    return (
        <ListGroup>
            {issues.map(issue => {
                if (issue.state === "open")
                    return (
                        <ListGroup.Item key={issue.number}>
                            <Row>
                                <Col>
                                    <h5>{"#" + issue.number + ": " + issue.title} <Badge variant="warning">{issue.state}</Badge></h5>
                                    <p>{issue.body}</p>
                                </Col>
                                <Col>
                                    <Button style={{"float" : "right"}}variant="danger" onClick={() => handleClose(issue.number)}>Close</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    );
            })}
        </ListGroup>
    );
}

function ClosedIssues({issues}) {
    return (
        <ListGroup>
            {issues.map(issue => {
                if (issue.state === "closed")
                    return (
                        <ListGroup.Item key={issue.number}>
                            <h5>{"#" + issue.number + ": " + issue.title} <Badge variant="success">{issue.state}</Badge></h5>
                            <p>{issue.body}</p>
                        </ListGroup.Item>
                    );
            })}
        </ListGroup>
    );
}

export default IssuesOverview;
