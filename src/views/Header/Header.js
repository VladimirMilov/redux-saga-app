import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

import { ROUTES } from "../../utils/constants";

const Header = () => {
  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to={ROUTES.INITIAL}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={ROUTES.REQUESTS}>Async requests</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={ROUTES.ANIMATIONS}>Animations</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={ROUTES.CONTACTS}>Contacts</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
