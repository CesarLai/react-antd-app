import { FC, useState, CSSProperties } from "react";
import { useSelector } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import classNames from "classnames";
import { Menu, MenuTheme, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { RootReducerState } from "@/store/types";
import styles from "./index.module.less";

type MenuNavProps = {
  routes: MainLayoutRouteConfig[];
  currentRoute: MainLayoutRouteConfig;
  theme?: MenuTheme;
} & RouteComponentProps;

/**
 * Sider Nav Component
 */
const MenuNav: FC<MenuNavProps> = (props: MenuNavProps) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );

  const [collapsed, setCollapsed] = useState(false);

  const finalTheme = props.theme ?? "dark";

  const onClickMenuItem = (path: string) => {
    props.history.push(path);
  };

  const onCollapse = (nextCollapsed: boolean) => {
    setCollapsed(nextCollapsed);
  };

  /**
   * Sider Nav Toggle Button View
   */
  const SiderTrigger = () => {
    const ICON_SIZE = 16;
    const iconStyle: CSSProperties = { fontSize: ICON_SIZE };

    return (
      <div className={classNames(styles.siderTrigger, finalTheme)}>
        <button className={styles.triggerButton}>
          {collapsed ? (
            <MenuUnfoldOutlined style={iconStyle} />
          ) : (
            <MenuFoldOutlined style={iconStyle} />
          )}
        </button>
      </div>
    );
  };

  return (
    <Layout.Sider
      className={styles.menuNav}
      theme={finalTheme}
      collapsible
      collapsed={collapsed}
      trigger={<SiderTrigger />}
      onCollapse={onCollapse}
    >
      <Menu
        style={{ height: "100%" }}
        theme={finalTheme}
        mode="inline"
        selectedKeys={[props.currentRoute.path]}
      >
        {props.routes.map((route) => {
          const Icon = route.menuOptions.icon as FC;
          const menuTitle =
            typeof route.menuOptions.name === "function"
              ? route.menuOptions.name(localeValue)
              : route.menuOptions.name;

          return (
            <Menu.Item
              key={route.path}
              icon={Icon ? <Icon /> : null}
              onClick={() => onClickMenuItem(route.path)}
            >
              {menuTitle}
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(MenuNav);
