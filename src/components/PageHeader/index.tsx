import { FC, useCallback } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import classNames from "classnames";

import imgLogo from "@/assets/logo.svg";
import Locale from "./locales/zh-cn";
import styles from "./index.module.less";

type PageHeaderProps = RouteComponentProps;

/**
 * 公共顶部栏组件
 */
const PageHeader: FC<PageHeaderProps> = (props: PageHeaderProps) => {
  const goIndex = () => {
    props.history.push("/");
  };

  const onLogout = useCallback(() => {
    props.history.push("/login");
  }, [props]);

  const userDropdownMenus = useCallback(
    () => (
      <Menu>
        <Menu.Item key="menu-user-info">
          <div className="user-info">
            <div className="name">路人甲</div>
            <div className="permission">管理员</div>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="menu-user">
          <UserOutlined /> {Locale.MENU_USER_INFO}
        </Menu.Item>
        <Menu.Item key="menu-logout" onClick={onLogout}>
          <LogoutOutlined /> {Locale.MENU_LOGOUT}
        </Menu.Item>
      </Menu>
    ),
    [onLogout]
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
          overlay={userDropdownMenus}
          overlayClassName="dropdown-user"
          placement="bottomRight"
        >
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default withRouter(PageHeader);
