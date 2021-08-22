import * as React from "react";
import { withRouter } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";

import { LocaleModel } from "./locales/types";

const Dashboard = withRouter(React.lazy(() => import("./index")));

const getLocale = (locale: Locale) =>
  require(`./locales/${locale}`).default as LocaleModel;

export default [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "main",
    menuOptions: {
      index: 0,
      name: (locale) => getLocale(locale).PAGE_TITLE,
      icon: DashboardOutlined,
    },
  },
] as RouteConfig[];
