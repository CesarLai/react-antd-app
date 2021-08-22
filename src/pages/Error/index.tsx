import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Result, Layout } from "antd";

import { RootReducerState } from "@/store/types";
import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import { ErrorCode, ResultTitleKey, ResultSubTitleKey } from "./types";
import styles from "./index.module.less";

type ErrorPageProps = RouteComponentProps;

/**
 * Error Page
 */
const ErrorPage: FC<ErrorPageProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const Locale = require(`./locales/${localeValue}`).default as LocaleModel;
  const GlobalLocale = require(`@/locales/${localeValue}`)
    .default as GlobalLocaleModel;

  const { code } = (props.match.params as { code: ErrorCode }) ?? {
    code: "404",
  };
  const title = Locale[`RESULT_TITLE_${code}` as ResultTitleKey];
  const subTitle = Locale[`RESULT_SUB_TITLE_${code}` as ResultSubTitleKey];

  return (
    <Layout className={styles.container}>
      <Helmet>
        <title>
          {code} | {GlobalLocale.APP_NAME}
        </title>
      </Helmet>
      <Result status={code} title={title} subTitle={subTitle} />
    </Layout>
  );
};

export default memo(ErrorPage);
