import { FC, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import classNames from "classnames";
import { Menu, MenuTheme, Layout, ConfigProvider } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import styles from "./index.module.less";
import { CSSProperties } from "react";

type MenuNavProps = {
  routes: MainLayoutRouteConfig[];
  currentRoute: MainLayoutRouteConfig;
  theme?: MenuTheme;
} & RouteComponentProps;

const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

/**
 * Sider Nav Component
 */
const MenuNav: FC<MenuNavProps> = (props: MenuNavProps) => {
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
    <ConfigConsumer>
      {(contextValues) => {
        const localeName =
          (contextValues.locale?.locale as Lowercase<Locale>) ?? "zh-cn";

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
                    ? route.menuOptions.name(localeName)
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
      }}
    </ConfigConsumer>
  );
};

export default withRouter(MenuNav);
