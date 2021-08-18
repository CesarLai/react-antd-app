import { FC, useState, useEffect } from "react";
import { Layout } from "antd";

import * as RouteUtil from "@/utils/route";
import PageHeader from "@/components/PageHeader";
import MenuNav from "./MenuNav";
import { LayoutProps } from "../types";
import styles from "./index.module.less";

/**
 * 主布局，左侧展示页面导航，右侧展示页面内容
 */
const MainLayout: FC<LayoutProps> = (props) => {
  const [menuRoutes, setMenuRoutes] = useState<MainLayoutRouteConfig[]>([]);

  useEffect(() => {
    const routes = (
      props.routes.filter((route) =>
        RouteUtil.isMainLayoutRouteConfig(route)
      ) as MainLayoutRouteConfig[]
    ).sort(
      (current, next) => current.menuOptions.index - next.menuOptions.index
    );
    setMenuRoutes(routes);
  }, [props]);

  return (
    <Layout className={styles.layoutMain}>
      <PageHeader />
      <Layout>
        <MenuNav
          theme="light"
          routes={menuRoutes}
          currentRoute={props.currentRoute as MainLayoutRouteConfig}
        />
        <Layout className={styles.layoutContent}>{props.children}</Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
