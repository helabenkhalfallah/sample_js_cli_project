import { Router, Route, browserHistory, IndexRoute } from "react-router";
import React, { Component } from "react";
import AppHome from "./containers/app/AppHome";

class Routees extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppHome} />
      </Router>
    );
  }
}
export default Routees;
