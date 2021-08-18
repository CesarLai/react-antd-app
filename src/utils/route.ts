/**
 * 判断是否为跳转路由配置
 *
 * @param route 路由配置对象
 * @returns boolean
 */
export function isRedirectRoute(route: any): route is RedirectRouteConfig {
  return typeof route.redirect === "string";
}

/**
 * 判断是否为布局路由配置
 *
 * @param route 路由配置对象
 * @returns boolean
 */
export function isLayoutRouteConfig(route: any): route is LayoutRouteConfig {
  return typeof route.layout === "string";
}

/**
 * 判断是否为主布局路由配置
 *
 * @param route 路由配置对象
 * @returns boolean
 */
export function isMainLayoutRouteConfig(
  route: any
): route is MainLayoutRouteConfig {
  return isLayoutRouteConfig(route) && route.layout === "main";
}
