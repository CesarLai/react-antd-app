import React from "react";
import { Layout, PageHeader } from "antd";

import styles from "./index.module.less";

export default function Projects() {
  return (
    <Layout className={styles.container}>
      <PageHeader
        className={styles.header}
        title="Projects"
        subTitle="项目列表"
      />
    </Layout>
  );
}
