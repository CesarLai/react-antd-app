import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout, PageHeader, ConfigProvider } from "antd";

import logo from "@/assets/logo.svg";
import styles from "./index.module.less";

type DashboardProps = RouteComponentProps;

export default function Dashboard(props: DashboardProps) {
  const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

  const renderTitle = (title: string) => (
    <div className={styles.headerTitle}>{title}</div>
  );

  return (
    <Layout className={styles.container}>
      <ConfigConsumer>
        {(contextValues) => {
          const localeName = contextValues.locale?.locale ?? "zh-cn";
          const Locale = require(`./locales/${localeName}`).default;
          return (
            <>
              <PageHeader
                className={styles.header}
                title={renderTitle(Locale.PAGE_TITLE)}
              />
              <Layout.Content className={styles.content}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h1>Hello World</h1>
              </Layout.Content>
            </>
          );
        }}
      </ConfigConsumer>
    </Layout>
  );
}
