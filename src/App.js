import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFoundPage from './404/404'
import Header from "./Components/Header/Header";
import Main from "./Containers/Main/Main";
import Login from "./Containers/Login/Login";




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
                <Route exact path="/Login" render={props => (
                    <div>
                        <Header/>
                        <Login/>
                    </div>
                )}/>
                <Route exact path="/login" render={props => (
                    <div>
                    </div>
                )}/>


                <Route component={NotFoundPage}/>
              </Switch>


          </Router>
    )
  }

}

export default (App);
