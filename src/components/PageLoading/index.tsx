import { FC, PropsWithChildren } from "react";
import { Spin } from "antd";

type PageLoadingProps = PropsWithChildren<any>;

/**
 * 页面Loading组件
 */
const PageLoading: FC<PageLoadingProps> = (props) => (
  <Spin>{props.children}</Spin>
);

export default PageLoading;
