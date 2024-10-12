import React from "react";
import { Tabs } from "antd";

import {
  HomeFilled,
  HeartOutlined,
  PlusSquareOutlined,
  QqOutlined,
  UserOutlined,
} from "@ant-design/icons";

export function SiderContent() {
  const itemsArray = [
    {
      label: (
        <span>
          <HomeFilled />
          <span> Home </span>
        </span>
      ),
      key: "HomeTab",
    },
    {
      label: (
        <span>
          <HeartOutlined style={{ color: "#ff69b4" }} />
          <span> Notifications </span>
        </span>
      ),
      key: "NotificationsTab",
    },
    {
      label: (
        <span>
          <PlusSquareOutlined />
          <span> Create </span>
        </span>
      ),
      key: "CreateTab",
    },
    {
      label: (
        <span>
          <UserOutlined />
          <span> Profile </span>
        </span>
      ),
      key: "ProfileTab",
    },
  ];

  return (
    <div>
      <h2 className="title siderTitle">fakestagram</h2>
      <Tabs tabPosition="left" items={itemsArray}></Tabs>
    </div>
  );
}
