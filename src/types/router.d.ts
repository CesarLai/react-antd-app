import { ComponentType } from "react";
import { AntdIconProps } from "@ant-design/icons/es/components/AntdIcon";
import { PageLayoutType } from "@/layouts";

interface Window {
  router: any;
}

interface MenuOptions {
  index: number;
  name: ((locale: Locale) => string) | string;
  icon: ComponentType<AntdIconProps>;
}

declare global {
  interface BaseRouteConfig {
    path: string;
  }

  type RedirectRouteConfig = {
    redirect: string;
  } & BaseRouteConfig;

  type BaseLayoutRouteConfig<L extends PageLayoutType> = {
    component: ComponentType<Record<string, any>>;
    layout: L;
  } & BaseRouteConfig;

  type BlankLayoutRouteConfig = BaseLayoutRouteConfig<"blank">;

  type BasicLayoutRouteConfig = BaseLayoutRouteConfig<"basic">;

  type MainLayoutRouteConfig = {
    menuOptions: MenuOptions;
  } & BaseLayoutRouteConfig<"main">;

  type LayoutRouteConfig =
    | BlankLayoutRouteConfig
    | BasicLayoutRouteConfig
    | MainLayoutRouteConfig;

  type RouteConfig = LayoutRouteConfig | RedirectRouteConfig;
}
