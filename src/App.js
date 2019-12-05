import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFoundPage from './404/404'
import Header from "./Components/Header/Header";
import StakeholderIdentification from "./Components/StakeholderIdentification/StakeholderIdentification";
import KeyStakeholderInterview from "./Components/KeyStakeholderInterview/KeyStakeholderInterview"
import Main from "./Containers/Main/Main";
import Login from "./Components/Login/Login";
import StakeholderOverview from "./Components/StakeholderOverview/StakeholderOverview";
import Overview from "./Containers/Projects/Overview/Overview";
import Project from "./Containers/Projects/Project/Project";
import ProjectScope_Component from "./Components/ProjectScope/ProjectScope";
import Signup from "./Components/Signup/Signup";


class App extends Component {
    render() {

        if(localStorage.getItem("token") == null){
            return(
            <Router>
                <Switch>
                    <Route exact path="/signup" component={Signup}/>
                    <Route component={Login}/>
                </Switch>
            </Router>
            )
        }

        const loggedIn = true;
        return (
            <Router>
                {
                    loggedIn && <Header/>
                }
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/stakeholders/identification" component={StakeholderIdentification}/>
                    <Route exact path="/stakeholders/interview" component={KeyStakeholderInterview}/>
                    <Route exact path="/projects" component={Overview}/>
                    <Route path="/:id/:view" component={Project}/>


                    <Route component={NotFoundPage}/>
                </Switch>


            </Router>
        )
    }

}

export default (App);
