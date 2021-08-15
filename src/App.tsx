import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

import Home from "@/pages/Home";
import Login from "@/pages/User/Login";
import ErrorPage from "@/pages/Error";

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/" component={Home} />
          <Route path={["/404"]} exact component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  );
}
