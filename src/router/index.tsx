import React, { useEffect, PropsWithChildren, ComponentType, FC } from "react";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

import { MainLayout, BlankLayout, LayoutProps, BasicLayout } from "@/layouts";
import PageLoading from "@/components/PageLoading";
import * as RouteUtil from "@/utils/route";

/**
 * 获取路由配置列表
 * 遍历 pages 目录下所有子目录，找出所有 routes.tsx 文件
 */
function getRouteList() {
  let routes: RouteConfig[] = [];
  try {
    const context = require.context(`../pages`, true, /.*\/routes\.tsx?$/);
    context.keys().forEach((key: string) => {
      const route: RouteConfig = context(key).default;
      routes = routes.concat(route);
    });
  } catch (err) {
    console.warn(err.message);
  }

  routes.push({
    path: "/",
    redirect: "/dashboard",
  });
  routes.push({
    path: "*",
    redirect: "/error/404",
  });

  return routes;
}

const routes = getRouteList();

console.log(">>> routes: ", JSON.stringify(routes));

/**
 * 布局包装组件，根据路由配置使用相应的布局组件
 */
function LayoutComponent(
  props: PropsWithChildren<{ route: LayoutRouteConfig }>
) {
  let Layout: ComponentType<LayoutProps>;
  switch (props.route.layout) {
    case "main":
      Layout = MainLayout;
      break;
    case "basic":
      Layout = BasicLayout;
      break;
    default:
      Layout = BlankLayout;
      break;
  }

  return (
    <Layout routes={routes} currentRoute={props.route}>
      {props.children}
    </Layout>
  );
}

/**
 * 根据路由配置获取相应的布局组件
 *
 * @param route 路由配置对象
 */
function getLayoutComponent(route: LayoutRouteConfig): FC {
  const PageComponent = route.component as FC;
  return (props) => (
    <LayoutComponent route={route}>
      <PageComponent {...props} />
    </LayoutComponent>
  );
}

function SwitchRouterComponent(props: RouteComponentProps) {
  useEffect(() => {
    console.log(">>> Router Change: ", props.location);
  }, [props.location]);

  return (
    <React.Suspense fallback={<PageLoading />}>
      <Switch>
        {routes.map((route, index) =>
          RouteUtil.isRedirectRoute(route) ? (
            <Redirect exact key={index} from={route.path} to={route.redirect} />
          ) : (
            <Route
              key={index}
              path={route.path}
              exact={false}
              component={getLayoutComponent(route)}
            />
          )
        )}
      </Switch>
    </React.Suspense>
  );
}

const WithRouterComponent = withRouter(SwitchRouterComponent);

export default function RouterComponent() {
  return (
    <HashRouter>
      <WithRouterComponent />
    </HashRouter>
  );
}
