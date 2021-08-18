import * as React from "react";
import { withRouter } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";

import Locale from "./locales/zh-cn";

const Dashboard = withRouter(React.lazy(() => import("./index")));

export default [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "main",
    menuOptions: {
      index: 0,
      name: Locale.PAGE_TITLE,
      icon: DashboardOutlined,
    },
  },
] as RouteConfig[];
