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
                                <th>{line.name} </th>
                                <th>{line.email}</th>
                                <th>{line.keyStakeHolder}</th>
                            </tr>
                        )
                    })}
                </Table>
            </div>
        )
    }
}

export default StakeholderOverview