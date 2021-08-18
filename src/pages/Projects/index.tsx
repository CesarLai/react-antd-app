import React from "react";
import { Layout, PageHeader } from "antd";

import Locale from "./locales/zh-cn";
import styles from "./index.module.less";

export default function Projects() {
  return (
    <Layout className={styles.container}>
      <PageHeader className={styles.header} title={Locale.PAGE_TITLE} />
    </Layout>
  );
}
