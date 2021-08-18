import { FC } from "react";
import { LayoutProps } from "./types";

/**
 * 空布局组件，渲染页面的原始内容
 */
const BlankLayout: FC<LayoutProps> = (props) => <>{props.children}</>;

export default BlankLayout;
