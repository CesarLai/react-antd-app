import { FC, memo } from "react";
import { Layout } from "antd";

import PageHeader from "@/components/PageHeader";
import { LayoutProps } from "../types";
import styles from "./index.module.less";

/**
 * Basic Layout Component
 *
 * Include PageHeader component and page content.
 */
const BasicLayout: FC<LayoutProps> = (props) => (
  <Layout className={styles.layoutBasic}>
    <PageHeader />
    <Layout className={styles.layoutContent}>{props.children}</Layout>
  </Layout>
);

export default memo(BasicLayout);
