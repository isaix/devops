import React, {Component} from 'react';
import {Button, ButtonToolbar, FormControl, InputGroup} from "react-bootstrap";

class StakeholderIdentification extends Component {

    constructor(props) {
        super(props)
        this.state = {
            StakeholderIdentificationInputLines: [],
        }
    }

    render(){
        return (

            <div>
                <h1>Stakeholder Identification</h1>
                <p>Fill this table with info about stakeholders</p>
                <div>
                    {this.state.StakeholderIdentificationInputLines.map(line => {
                        return (<StakeholderIdentificationInputLine/>)
                    })}
                </div>
                <ButtonToolbar>
                    <Button variant="success" onClick={()=>this.renderInputLine()}>+</Button>
                    <Button variant="primary">Next</Button>
                </ButtonToolbar>
            </div>
        )
    }


    renderInputLine (){
        let newInput = 'input-${this.state.inputs.length}';
        this.setState(prevState => ({StakeholderIdentificationInputLines: prevState.StakeholderIdentificationInputLines.concat([newInput])}))
    }

}

class StakeholderIdentificationInputLine extends Component {
    render(){
        return(
            <div id="dynamicList">
                <InputGroup className="mb-3">
                    <FormControl placeholder="Stakeholders Name"/>
                    <FormControl placeholder="Stakeholder mail"/>
                    <InputGroup.Append>
                        <InputGroup.Checkbox/>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

export default StakeholderIdentification