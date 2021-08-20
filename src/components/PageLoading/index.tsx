import { FC, PropsWithChildren, memo } from "react";
import { Spin } from "antd";

import styles from "./index.module.less";

type PageLoadingProps = PropsWithChildren<any>;

/**
 * Page Loading Component
 */
const PageLoading: FC<PageLoadingProps> = (props) => (
  <div className={styles.loadingView}>
    <Spin size="large" tip="loading">
      {props.children}
    </Spin>
  </div>
);

export default memo(PageLoading);
