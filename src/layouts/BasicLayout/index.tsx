import { FC } from "react";
import { Layout } from "antd";

import PageHeader from "@/components/PageHeader";
import { LayoutProps } from "../types";
import styles from "./index.module.less";

/**
 * 基本布局，包含顶部栏
 */
const BasicLayout: FC<LayoutProps> = (props) => (
  <Layout className={styles.layoutBasic}>
    <PageHeader />
    <Layout className={styles.layoutContent}>{props.children}</Layout>
  </Layout>
);

export default BasicLayout;
