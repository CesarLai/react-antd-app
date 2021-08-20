import { FC, useState, useEffect, memo } from "react";
import { Layout } from "antd";

import * as RouteUtil from "@/utils/route";
import PageHeader from "@/components/PageHeader";
import MenuNav from "./MenuNav";
import { LayoutProps } from "../types";
import styles from "./index.module.less";

/**
 * Main Layout Component
 *
 * Include PageHeader component, MenuNav component and page content.
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

export default memo(MainLayout);
