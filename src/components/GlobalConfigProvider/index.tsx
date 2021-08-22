import { FC, memo, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { ConfigProvider } from "antd";

import { RootReducerState } from "@/store/types";

type GlobalConfigProviderProps = PropsWithChildren<{}>;

/**
 * Global Config Component
 */
const GlobalConfigProvider: FC<GlobalConfigProviderProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const antdLocaleConfig = require(`antd/lib/locale/${localeValue.replace(
    "-",
    "_"
  )}`).default;

  return (
    <ConfigProvider locale={antdLocaleConfig}>{props.children}</ConfigProvider>
  );
};

export default memo(GlobalConfigProvider);
