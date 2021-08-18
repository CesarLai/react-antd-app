import React from "react";
import { Layout, PageHeader } from "antd";
import Locale from "./locales/zh-cn";

import styles from "./index.module.less";

export default function User() {
  const renderTitle = (title: string) => (
    <div className={styles.headerTitle}>{title}</div>
  );

  return (
    <Layout className={styles.container}>
      <PageHeader
        className={styles.header}
        title={renderTitle(Locale.PAGE_TITLE)}
      />
    </Layout>
  );
}
