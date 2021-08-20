import { FC, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ConfigProvider } from "antd";

import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type LoginProps = RouteComponentProps;

const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

/**
 * Login Page
 */
const Login: FC<LoginProps> = (props) => {
  return (
    <ConfigConsumer>
      {(contextValues) => {
        const localeName = contextValues.locale?.locale ?? "zh-cn";
        const GlobalLocale = require(`@/locales/${localeName}`)
          .default as GlobalLocaleModel;
        const Locale = require(`./locales/${localeName}`)
          .default as LocaleModel;

        return (
          <div className={styles.container}>
            <Helmet>
              <title>
                {Locale.PAGE_TITLE} | {GlobalLocale.APP_NAME}
              </title>
            </Helmet>
          </div>
        );
      }}
    </ConfigConsumer>
  );
};

export default memo(Login);
