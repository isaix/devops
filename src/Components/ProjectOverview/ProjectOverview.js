import React, {Component} from 'react';
import ProjectStore from "../../MobX/ProjectStore";
import Table from "react-bootstrap/Table";

class ProjectOverview extends Component{
    constructor(props){
        super(props);
        this.state = {
            Projects: new ProjectStore().getProjects(),
        }
    }

    render() {
        return (<div>
            <h1>Projects</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                {this.state.Projects.map(project => ProjectEntry(project))}
            </Table>
        </div>
        )
    }

}

function ProjectEntry(project){
    return (
        <tr>
            <th>{project.title} </th>
            <th>{project.description}</th>
        </tr>
    );
}

export default ProjectOverview
