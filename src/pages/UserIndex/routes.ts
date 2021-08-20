import * as React from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import { LocaleModel } from "./locales/types";

const User = withRouter(React.lazy(() => import("./index")));

const getLocale = (locale: Lowercase<Locale>) =>
  require(`./locales/${locale}`).default as LocaleModel;

export default [
  {
    path: "/user",
    component: User,
    layout: "main",
    menuOptions: {
      index: 2,
      name: (locale: Lowercase<Locale>) => getLocale(locale).PAGE_TITLE,
      icon: UserOutlined,
    },
  },
] as RouteConfig[];
