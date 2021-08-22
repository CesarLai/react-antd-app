import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";

import { RootReducerState } from "@/store/types";
import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type LoginProps = RouteComponentProps;

/**
 * Login Page
 */
const Login: FC<LoginProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const Locale = require(`./locales/${localeValue}`).default as LocaleModel;
  const GlobalLocale = require(`@/locales/${localeValue}`)
    .default as GlobalLocaleModel;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {Locale.PAGE_TITLE} | {GlobalLocale.APP_NAME}
        </title>
      </Helmet>
    </div>
  );
};

export default memo(Login);
