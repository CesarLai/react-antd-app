declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

type Locale = "zh-CN" | "en-US";

interface Window {
  Locale: Locale;
}
