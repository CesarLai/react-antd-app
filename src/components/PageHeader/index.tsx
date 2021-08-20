import { FC, useCallback, memo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Avatar, Dropdown, Menu, ConfigProvider } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import classNames from "classnames";

import imgLogo from "@/assets/logo.svg";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type PageHeaderProps = RouteComponentProps;

const ConfigConsumer = ConfigProvider.ConfigContext.Consumer;

/**
 * Common Page Header Component
 */
const PageHeader: FC<PageHeaderProps> = (props) => {
  const goIndex = () => {
    props.history.push("/");
  };

  const goUserCenter = useCallback(() => {
    props.history.push("/user");
  }, [props]);

  const onLogout = useCallback(() => {
    props.history.push("/login");
  }, [props]);

  const userDropdownMenus = useCallback(
    (locale: LocaleModel) => (
      <Menu>
        <Menu.Item key="menu-user-info">
          <div className="user-info">
            <div className="name">{locale.MENU_USER_NAME}</div>
            <div className="permission">{locale.MENU_USER_ROLE}</div>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="menu-user" onClick={goUserCenter}>
          <UserOutlined /> {locale.MENU_USER_INFO}
        </Menu.Item>
        <Menu.Item key="menu-logout" onClick={onLogout}>
          <LogoutOutlined /> {locale.MENU_LOGOUT}
        </Menu.Item>
      </Menu>
    ),
    [goUserCenter, onLogout]
  );

  return (
    <ConfigConsumer>
      {(contextValues) => {
        const localeName = contextValues.locale?.locale ?? "zh-cn";
        const Locale = require(`./locales/${localeName}`)
          .default as LocaleModel;

        return (
          <div className={styles.pageHeader}>
            <div className={classNames(styles.block, styles.left)}>
              <div className={styles.logoView} onClick={goIndex}>
                <img className={styles.logo} src={imgLogo} alt="logo" />
                <div className={styles.title}>{Locale.HEADER_TITLE}</div>
              </div>
            </div>
            <div className={classNames(styles.block, styles.right)}>
              <Dropdown
                overlay={userDropdownMenus(Locale)}
                overlayClassName="dropdown-user"
                placement="bottomRight"
              >
                <Avatar className={styles.avatar} icon={<UserOutlined />} />
              </Dropdown>
            </div>
          </div>
        );
      }}
    </ConfigConsumer>
  );
};

export default memo(withRouter(PageHeader));
