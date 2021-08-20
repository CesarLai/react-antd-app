import { FC, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ConfigProvider, Result, Layout } from "antd";

import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import { ErrorCode, ResultTitleKey, ResultSubTitleKey } from "./types";
import styles from "./index.module.less";

type ErrorPageProps = RouteComponentProps;

const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

/**
 * Error Page
 */
const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { code } = (props.match.params as { code: ErrorCode }) ?? {
    code: "404",
  };

  return (
    <ConfigConsumer>
      {(contextValues) => {
        const localeName = contextValues.locale?.locale ?? "zh-cn";
        const GlobalLocale = require(`@/locales/${localeName}`)
          .default as GlobalLocaleModel;
        const Locale = require(`./locales/${localeName}`)
          .default as LocaleModel;
        const title = Locale[`RESULT_TITLE_${code}` as ResultTitleKey];
        const subTitle =
          Locale[`RESULT_SUB_TITLE_${code}` as ResultSubTitleKey];

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
      }}
    </ConfigConsumer>
  );
};

export default memo(ErrorPage);
