import React from "react";
import { Layout, PageHeader } from "antd";

import styles from "./index.module.less";

export default function User() {
  return (
    <Layout className={styles.container}>
      <PageHeader className={styles.header} title="User" subTitle="个人中心" />
    </Layout>
  );
}
