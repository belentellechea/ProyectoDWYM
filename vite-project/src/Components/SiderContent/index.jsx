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
import { NotificationsModal } from "../NotificationsModal";

export function SiderContent({
  openNotifications,
  closeNotifications,
  setVisible,
}) {
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
    } else {
      setActiveTabKey("NotificationsTab");
    }
  }, [location.pathname, activeTabKey]);

  // This makes de tab mark the page where it was previous to Notifications when it closes.
  let previousTab = "/";
  function completeCloseNotifications() {
    closeNotifications();
    setActiveTabKey(previousTab);
  }

  const handleTabChange = (key) => {
    setActiveTabKey(key);

    if (key === "ProfileTab") {
      navigate("/profile");
      previousTab = "ProfileTab";
      completeCloseNotifications();
    } else if (key === "HomeTab") {
      navigate("/");
      previousTab = "HomeTab";
      completeCloseNotifications();
    } else if (key === "NotificationsTab") {
      //navigate("/notifications");
      openNotifications();
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
    <div onClick={closeNotifications}>
      <h2 className="title siderTitle"> fakestagram </h2>
      <Tabs
        tabPosition="left"
        items={itemsArray}
        onChange={handleTabChange} // Maneja cambio de pestaña
        activeKey={activeTabKey} // Vincula la pestaña activa al estado
      />
    </div>
  );
}
