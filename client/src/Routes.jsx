import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import TaskDashBoard from "./view/Dashboard";
import TaskList from "./view/TaskList";
import TaskForm from "./view/Task";
import NotFound from "./view/NotFound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={TaskDashBoard} exact path="/dashboard" />
        <Route component={TaskList} exact path="/task-list" />
        <Route component={TaskForm} exact path="/task" />
        <Route component={NotFound} exact path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
