import * as React from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import Locale from "./locales/zh-cn";

const Projects = withRouter(React.lazy(() => import("./index")));

export default [
  {
    path: "/projects",
    component: Projects,
    layout: "main",
    menuOptions: {
      index: 1,
      name: Locale.PAGE_TITLE,
      icon: UserOutlined,
    },
  },
] as RouteConfig[];
