import React from "react";
import { Layout, Sider } from "antd";
import { Tabs } from "antd";

import {
  HomeFilled,
  HeartOutlined,
  PlusSquareOutlined,
  QqOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

export function Sider() {
  return (
    <Sider>
      <Tabs tabPosition="left">
        <TabPane
          tab={
            <span>
              <HomeFilled />
              Home
            </span>
          }
        ></TabPane>

        <TabPane
          tab={
            <span>
              <HeartOutlined />
              Notifications
            </span>
          }
        ></TabPane>

        <TabPane
          tab={
            <span>
              <PlusSquareOutlined />
              Create
            </span>
          }
        ></TabPane>

        <TabPane
          tab={
            <span>
              <QqOutlined />
              Profile
            </span>
          }
        ></TabPane>
      </Tabs>
    </Sider>
  );
}
