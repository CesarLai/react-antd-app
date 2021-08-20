import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

import { createRootStore } from "@/store";
import RouterComponent from "@/router";

const LOCALE = (process.env.LOCALE as Locale) ?? "zh-CN";
window.Locale = LOCALE;

const localeConfig = LOCALE === "en-US" ? enUS : zhCN;

const { store, persistor } = createRootStore({
  locale: {
    locale: LOCALE,
  },
});

/**
 * App Component
 */
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={localeConfig}>
          <RouterComponent />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}
