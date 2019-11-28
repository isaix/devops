import {ListGroup,} from "react-bootstrap";
import React, {Component} from "react";
import {getIssues} from "../../Axios";
import IssueCreate from "../IssueCreate/IssueCreate";

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
        }
    }

    componentDidMount() {
        this.updateIssues();
    }

    updateIssues = () => {
        getIssues(call => {
            let issues = call.items;
            this.setState({issues});
        })
    };

    render (){
        const {issues} = this.state;

        return (
            <>
                <ListGroup variant="flush">
                    {issues.map(issue => (
                        <ListGroup.Item>
                            <h6>{issue.title}</h6>
                            <p>{issue.state}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <IssueCreate update={this.updateIssues}/>
            </>
        );
    }
}

export default IssuesOverview;
