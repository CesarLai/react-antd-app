import * as React from "react";
import { withRouter } from "react-router-dom";

const ErrorPage = withRouter(React.lazy(() => import("./index")));

export default [
  {
    path: "/error/:code",
    component: ErrorPage,
    layout: "basic",
  },
] as RouteConfig[];
