import React from "react";
import { Layout, PageHeader, ConfigProvider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import logo from "@/assets/logo.svg";
import styles from "./index.module.less";

export default function Dashboard() {
  const onBack = () => {};

  return (
    <Layout className={styles.container}>
      <ConfigProvider.ConfigContext.Consumer>
        {(contextValues) => {
          const localeName = contextValues.locale?.locale ?? "zh-cn";
          const Locale = require(`./locales/${localeName}`).default;
          return (
            <>
              <PageHeader
                className={styles.header}
                title="Dashboard"
                subTitle={Locale.PAGE_TITLE}
                backIcon={<ArrowLeftOutlined />}
                onBack={onBack}
              />
              <Layout.Content className={styles.content}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h1>Hello World</h1>
              </Layout.Content>
            </>
          );
        }}
      </ConfigProvider.ConfigContext.Consumer>
    </Layout>
  );
}
