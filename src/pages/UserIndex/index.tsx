import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout, PageHeader } from "antd";

import { RootReducerState } from "@/store/types";
import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type UserIndexProps = RouteComponentProps;

/**
 * User Index
 *
 * Show user profile.
 */
const UserIndex: FC<UserIndexProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const Locale = require(`./locales/${localeValue}`).default as LocaleModel;
  const GlobalLocale = require(`@/locales/${localeValue}`)
    .default as GlobalLocaleModel;

  const renderTitle = (title: string) => (
    <div className={styles.headerTitle}>{title}</div>
  );

  return (
    <Layout className={styles.container}>
      <Helmet>
        <title>
          {Locale.PAGE_TITLE} | {GlobalLocale.APP_NAME}
        </title>
      </Helmet>
      <PageHeader
        className={styles.header}
        title={renderTitle(Locale.PAGE_TITLE)}
      />
    </Layout>
  );
};

export default memo(UserIndex);
