import { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Menu, MenuTheme, Layout } from "antd";

type MenuNavProps = {
  routes: MainLayoutRouteConfig[];
  currentRoute: MainLayoutRouteConfig;
  theme?: MenuTheme;
} & RouteComponentProps;

/**
 * 侧边栏导航组件
 */
const MenuNav: FC<MenuNavProps> = (props: MenuNavProps) => {
  const finalTheme = props.theme ?? "dark";

  const onClickMenuItem = (path: string) => {
    props.history.push(path);
  };

  return (
    <Layout.Sider collapsible theme={finalTheme}>
      <Menu
        style={{ height: "100%" }}
        theme={finalTheme}
        mode="inline"
        selectedKeys={[props.currentRoute.path]}
      >
        {props.routes.map((route) => {
          const Icon = route.menuOptions.icon as FC;
          return (
            <Menu.Item
              key={route.path}
              icon={Icon ? <Icon /> : null}
              onClick={() => onClickMenuItem(route.path)}
            >
              {route.menuOptions.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(MenuNav);
