import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../Dashboard";
import Projects from "../Projects";
import User from "../User/Index";

export default function HomeRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/projects" component={Projects} />
      <Route path="/user" component={User} />
    </Switch>
  );
}
