import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFoundPage from './404/404'
import Header from "./Components/Header/Header";
import StakeholderIdentification from "./Components/StakeholderIdentification/StakeholderIdentification";
import KeyStakeholderInterview from "./Components/KeyStakeholderInterview/KeyStakeholderInterview"
import Main from "./Containers/Main/Main";
import Login from "./Containers/Login/Login";
import StakeholderOverview from "./Components/StakeholderOverview/StakeholderOverview";
import Overview from "./Containers/Projects/Overview/Overview";
import Project from "./Containers/Projects/Project/Project";


class App extends Component {
    render() {

        const loggedIn = true;
        return (
            <Router>
                {
                    loggedIn && <Header/>
                }
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/stakeholders" component={StakeholderOverview}/>
                    <Route exact path="/stakeholders/identification" component={StakeholderIdentification}/>
                    <Route exact path="/stakeholders/interview" component={KeyStakeholderInterview}/>
                    <Route exact path="/projects" component={Overview}/>
                    <Route path="/projects/:id" component={Project}/>

                    <Route component={NotFoundPage}/>
                </Switch>


            </Router>
        )
    }

}

export default (App);
