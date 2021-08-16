import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { CollapseType } from "antd/lib/layout/Sider";
import {
  DashboardOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, RouteComponentProps } from "react-router-dom";
import { Location } from "history";

import HomeRoutes from "./homeRoutes";
import logo from "@/assets/logo.svg";

import styles from "./index.module.less";

type AppProps = {} & RouteComponentProps;

const getMenuKeyFromLocation = (location: Location) => {
  return location.pathname.replace("/", "");
};

export default function App(props: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(
    getMenuKeyFromLocation(props.location)
  );

  const onCollapse = (nextCollapsed: boolean, type: CollapseType) => {
    if (type === "clickTrigger") {
      setCollapsed(nextCollapsed);
    }
  };

  const onChangeTab = ({ key }: any) => {
    setSelectedKey(key);
  };

  useEffect(() => {
    const key = getMenuKeyFromLocation(props.location);
    setSelectedKey(key);
  }, [props.location]);

  return (
    <Layout className={styles.container}>
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        className={styles.sider}
        onCollapse={onCollapse}
      >
        <div className={styles.siderLogoWrap}>
          <img src={logo} className={styles.siderLogo} alt="logo-sider" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
          className={styles.siderMenu}
          mode="inline"
          onClick={onChangeTab}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="projects" icon={<ProjectOutlined />}>
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="user" icon={<UserOutlined />}>
            <Link to="/user">User</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content className={styles.subContent}>
        <HomeRoutes />
      </Layout.Content>
    </Layout>
  );
}
