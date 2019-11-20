import React, { Component } from "react";
import Home from './Home';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Notfound from "./Notfound";
export default class App extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/notfound" component={Notfound} />
        <Route>
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    );
  }
}