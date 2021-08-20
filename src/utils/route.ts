/**
 * Type guard of redirect route config.
 *
 * @param route route config object
 * @returns boolean
 */
export function isRedirectRoute(route: any): route is RedirectRouteConfig {
  return typeof route.redirect === "string";
}

/**
 * Type Guard of layout route config.
 *
 * @param route route config object
 * @returns boolean
 */
export function isLayoutRouteConfig(route: any): route is LayoutRouteConfig {
  return typeof route.layout === "string";
}

/**
 * Type Guard of MainLayout route config.
 *
 * @param route route config object
 * @returns boolean
 */
export function isMainLayoutRouteConfig(
  route: any
): route is MainLayoutRouteConfig {
  return isLayoutRouteConfig(route) && route.layout === "main";
}
