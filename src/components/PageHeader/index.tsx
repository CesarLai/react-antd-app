import { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import classNames from "classnames";

import { RootReducerState } from "@/store/types";
import { updateLocale } from "@/store/global/actions";
import imgLogo from "@/assets/logo.svg";
import { LocaleModel } from "./locales/types";
import styles from "./index.module.less";

type PageHeaderProps = RouteComponentProps;

interface LocaleMenuConfig {
  icon: string;
  title: string;
  locale: Locale;
}

const getLocaleMenuConfigs = (locale: LocaleModel): LocaleMenuConfig[] => [
  {
    icon: "🇨🇳",
    title: locale.LOCALE_MENU_ZH_CN,
    locale: "zh-CN",
  },
  {
    icon: "🇺🇸",
    title: locale.LOCALE_MENU_EN_US,
    locale: "en-US",
  },
];

/**
 * Common Page Header Component
 */
const PageHeader: FC<PageHeaderProps> = (props) => {
  const localeValue = useSelector(
    (state: RootReducerState) => state.locale.locale
  );
  const Locale = require(`./locales/${localeValue}`).default as LocaleModel;
  const localeMenus = getLocaleMenuConfigs(Locale);
  const currentLocaleMenu =
    localeMenus.find((item) => item.locale === localeValue) ?? localeMenus[0];

  const dispatchAction = useDispatch();

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

  const changeLocale = useCallback(
    (locale: Locale) => {
      dispatchAction(updateLocale(locale));
    },
    [dispatchAction]
  );

  const localeDropdownMenus = useCallback(
    (locale: LocaleModel) => {
      const menuConfigs = getLocaleMenuConfigs(locale);
      return (
        <Menu selectable selectedKeys={[`locale-${localeValue}`]}>
          {menuConfigs.map((item) => {
            return (
              <Menu.Item
                key={`locale-${item.locale}`}
                className="locale-item"
                onClick={() => changeLocale(item.locale)}
              >
                <span>{item.icon}</span>
                <div className="title">{item.title}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    },
    [changeLocale, localeValue]
  );

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
        <Dropdown
          overlay={localeDropdownMenus(Locale)}
          overlayClassName="dropdown-locale"
          placement="bottomRight"
        >
          <div className={styles.localeMenu}>{currentLocaleMenu.icon}</div>
        </Dropdown>
      </div>
    </div>
  );
};

export default memo(withRouter(PageHeader));
