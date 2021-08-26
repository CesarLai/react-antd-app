import { FC, memo, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

import { RootReducerState } from "@/store/types";

type GlobalConfigProviderProps = PropsWithChildren<{}>;

const getAntdLocale = (locale: Locale) => {
  switch (locale) {
    case "en-US":
      return enUS;
    default:
      return zhCN;
  }
};

/**
 * Global Config Component
 */
const GlobalConfigProvider: FC<GlobalConfigProviderProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const antdLocaleConfig = getAntdLocale(localeValue);

  return (
    <ConfigProvider locale={antdLocaleConfig}>{props.children}</ConfigProvider>
  );
};

export default memo(GlobalConfigProvider);
