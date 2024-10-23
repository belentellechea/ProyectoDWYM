import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import {
  HomeFilled,
  HeartOutlined,
  PlusSquareOutlined,
  QqOutlined,
  UserOutlined,
  CreditCardFilled,
} from "@ant-design/icons";

import { useNavigate, useLocation } from "react-router-dom";

export function SiderContent({ setVisible }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTabKey, setActiveTabKey] = useState("HomeTab");

  function openModal() {
    setVisible("block");
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTabKey("HomeTab");
    } else if (location.pathname === "/profile") {
      setActiveTabKey("ProfileTab");
    }
  }, [location.pathname]);

  const handleTabChange = (key) => {
    setActiveTabKey(key);

    if (key === "ProfileTab") {
      navigate("/profile");
    } else if (key === "HomeTab") {
      navigate("/");
    } else if (key === "CreateTab") {
      openModal();
    }
  };

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
      <Tabs
        tabPosition="left"
        items={itemsArray}
        onChange={handleTabChange} //maneja cambio de pestaña
        activeKey={activeTabKey} //vincula la pestaña activa al estado
      />
    </div>
  );
}
