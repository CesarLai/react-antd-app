import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { CollapseType } from "antd/lib/layout/Sider";
import {
  DashboardOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, RouteComponentProps } from "react-router-dom";

import HomeRoutes from "./homeRoutes";
import logo from "../../assets/logo.svg";

import styles from "./index.module.less";

type AppProps = {} & RouteComponentProps;

export default function App(props: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(props.match.path);

  const onCollapse = (nextCollapsed: boolean, type: CollapseType) => {
    if (type === "clickTrigger") {
      setCollapsed(nextCollapsed);
    }
  };

  const onChangeTab = ({ key }: any) => {
    setSelectedKey(key);
  };

  useEffect(() => {
    const key = props.match.path.replace("/", "");
    setSelectedKey(key);
  }, [props.match.path]);

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
