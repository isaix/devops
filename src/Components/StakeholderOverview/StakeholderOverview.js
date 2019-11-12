import React, {Component} from 'react';
import StakeholderStore from "../../MobX/StakeholderStore";
import Table from 'react-bootstrap/Table';

class StakeholderOverview extends Component{

    constructor(props){
        super(props)
        this.state = {
            Stakeholders: new StakeholderStore().getStakeholders(),
        }
    }

    render(){
        return (

            <div>
                <h1>Stakeholders</h1>

                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Key Stakeholder?</th>
                    </tr>
                    </thead>
                    {this.state.Stakeholders.map(line =>{
                        return (
                            <tr>
                                <td>{line.name} </td>
                                <td>{line.mail}</td>
                                <td>{line.keyStakeHolder.toString()}</td>
                            </tr>
                        )
                    })}
                </Table>
            </div>
        )
    }
}

export default StakeholderOverview