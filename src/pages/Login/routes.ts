import * as React from "react";
import { withRouter } from "react-router-dom";

const Login = withRouter(React.lazy(() => import("./index")));

export default [
  {
    path: "/login",
    component: Login,
    layout: "blank",
  },
] as RouteConfig[];
