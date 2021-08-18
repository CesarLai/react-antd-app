import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

import RouterComponent from "@/router";

const LOCALE = (process.env.LOCALE as Locale) ?? "zh-CN";
window.Locale = LOCALE;

const localeConfig = LOCALE === "en-US" ? enUS : zhCN;

export default function App() {
  return (
    <ConfigProvider locale={localeConfig}>
      <RouterComponent />
    </ConfigProvider>
  );
}
