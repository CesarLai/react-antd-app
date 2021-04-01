import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../dashboard";
import Projects from "../projects";
import User from "../user/index/index";

export default function HomeRoutes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/projects" component={Projects} />
      <Route path="/user" component={User} />
    </Switch>
  );
}
