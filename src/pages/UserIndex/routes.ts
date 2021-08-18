import * as React from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import Locale from "./locales/zh-cn";

const User = withRouter(React.lazy(() => import("./index")));

export default [
  {
    path: "/user",
    component: User,
    layout: "main",
    menuOptions: {
      index: 2,
      name: Locale.PAGE_TITLE,
      icon: UserOutlined,
    },
  },
] as RouteConfig[];
