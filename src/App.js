import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFoundPage from './404/404'
import Header from "./Components/Header/Header";
import StakeholderIdentification from "./Components/StakeholderIdentification/StakeholderIdentification";
import KeyStakeholderInterview from "./Components/KeyStakeholderInterview/KeyStakeholderInterview"
import Main from "./Containers/Main/Main";
import Login from "./Containers/Login/Login";
import Stakeholders from "./Containers/Stakeholders/Stakeholders";


class App extends Component {
    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <div>
                            <Header/>
                            <Main/>
                        </div>
                    )}/>
                    <Route exact path="/login" render={props => (
                        <div>
                            <Header/>
                            <Login/>
                        </div>
                    )}/>
                    <Route exact path="/stakeholders" render={props => (
                        <div>
                            <Header/>
                            <Stakeholders/>
                        </div>
                    )}/>
                    <Route exact path="/stakeholders/interview" render={props => (
                        <div>
                            <Header/>
                            <KeyStakeholderInterview/>
                        </div>
                    )}/>
                    <Route exact path="/stakeholders/identification" render={props => (
                        <div>
                            <Header/>
                            <StakeholderIdentification/>
                        </div>
                    )}/>
                    <Route component={NotFoundPage}/>
                </Switch>


            </Router>
        )
    }

}

export default (App);
