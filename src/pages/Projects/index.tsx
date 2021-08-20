import { FC, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout, PageHeader, ConfigProvider } from "antd";

import { GlobalLocaleModel } from "@/locales/types";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type ProjectsProps = RouteComponentProps;

const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

/**
 * Projects
 *
 * Show projects list.
 */
const Projects: FC<ProjectsProps> = (props) => {
  const renderTitle = (title: string) => (
    <div className={styles.headerTitle}>{title}</div>
  );

  return (
    <ConfigConsumer>
      {(contextValues) => {
        const localeName = contextValues.locale?.locale ?? "zh-cn";
        const GlobalLocale = require(`@/locales/${localeName}`)
          .default as GlobalLocaleModel;
        const Locale = require(`./locales/${localeName}`)
          .default as LocaleModel;

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
      }}
    </ConfigConsumer>
  );
};

export default memo(Projects);
