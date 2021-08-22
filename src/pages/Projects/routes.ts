import * as React from "react";
import { withRouter } from "react-router-dom";
import { ProjectOutlined } from "@ant-design/icons";

import { LocaleModel } from "./locales/types";

const Projects = withRouter(React.lazy(() => import("./index")));

const getLocale = (locale: Locale) =>
  require(`./locales/${locale}`).default as LocaleModel;

export default [
  {
    path: "/projects",
    component: Projects,
    layout: "main",
    menuOptions: {
      index: 1,
      name: (locale) => getLocale(locale).PAGE_TITLE,
      icon: ProjectOutlined,
    },
  },
] as RouteConfig[];
