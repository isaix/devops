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





class App extends Component {
  render() {

     const loggedIn = true;
    return (
          <Router>
              {
                  loggedIn && <Header/>
              }
              <Switch>
                <Route exact path="/" render={() => (
                    <div>
                        <Main/>
                    </div>
                )}/>
                <Route exact path="/Login" render={props => (
                    <div>
                        <Login/>
                    </div>
                )}/>
                <Route exact path="/login" render={props => (
                    <div>
                    </div>
                )}/>
                <Route exact path="/StakeholderStore" component={StakeholderOverview}/>



                  <Route exact path="/StakeHolderIdentification" component={StakeholderIdentification}/>

                  <Route exact path="/KeyStakeholderInterview" component={KeyStakeholderInterview}/>

                <Route component={NotFoundPage}/>
              </Switch>


          </Router>
    )
  }

}

export default (App);
