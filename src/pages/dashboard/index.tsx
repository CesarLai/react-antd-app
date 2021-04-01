import React from "react";
import { Layout, PageHeader } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import logo from "../../images/logo.svg";
import styles from "./index.module.less";

export default function Dashboard() {
  const onBack = () => {};

  return (
    <Layout className={styles.container}>
      <PageHeader
        className={styles.header}
        title="Dashboard"
        subTitle="系统数据总览"
        backIcon={<ArrowLeftOutlined />}
        onBack={onBack}
      />
      <Layout.Content className={styles.content}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>Hello World</h1>
      </Layout.Content>
    </Layout>
  );
}
