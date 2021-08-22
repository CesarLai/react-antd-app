import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import GlobalConfigProvider from "@/components/GlobalConfigProvider";
import { createRootStore } from "@/store";
import RouterComponent from "@/router";

const LOCALE = (process.env.LOCALE as Locale) ?? "zh-CN";
window.Locale = LOCALE;

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
        <GlobalConfigProvider>
          <RouterComponent />
        </GlobalConfigProvider>
      </PersistGate>
    </Provider>
  );
}
