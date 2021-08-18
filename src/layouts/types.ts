import { PropsWithChildren } from "react";

type LayoutPropsBase = {
  routes: RouteConfig[];
  currentRoute: LayoutRouteConfig;
};

/**
 * 页面布局类型
 * - blank 空布局，只渲染页面本身的内容
 * - basic 基本布局，包含顶部栏和页面内容
 * - main 主布局，左侧显示菜单，右侧显示页面内容
 */
export type PageLayoutType = "main" | "blank" | "basic";

export type LayoutProps = PropsWithChildren<LayoutPropsBase>;
