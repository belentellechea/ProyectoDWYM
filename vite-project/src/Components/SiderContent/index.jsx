import React, { useEffect, useState } from "react";
import { Tabs, Menu, ConfigProvider } from "antd";
import "./SiderContent.css";
import logo from "../../assets/logoSider.png";
import logoColapsado from "../../assets/logo_Collapsed.png";

import {
  HomeFilled,
  HeartOutlined,
  PlusSquareOutlined,
  QqOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useNavigate, useLocation } from "react-router-dom";

export function SiderContent({
  openNotifications,
  closeNotifications,
  setVisible,
  setCollapsed,
  collapsed,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTabKey, setActiveTabKey] = useState(() => {
    if (location.pathname === "/") return "HomeTab";
    if (location.pathname === "/profile") return "ProfileTab";
    return "NotificationsTab";
  });

  function openModal() {
    setVisible("block");
  }

  function closeSideBar() {
    setCollapsed(true);
  }
  function openSideBar() {
    setCollapsed(false);
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
      openSideBar();
    } else if (key === "HomeTab") {
      navigate("/");
      previousTab = "HomeTab";
      completeCloseNotifications();
      openSideBar();
    } else if (key === "NotificationsTab") {
      closeSideBar();
      //navigate("/notifications");
      openNotifications();
    } else if (key === "CreateTab") {
      openModal();
    }
  };

  const itemsArray = [
    {
      label: (
        <span className="spanSider">
          <HomeFilled style={{ fontSize: "20px" }} />
          <span className="spanText"> Home </span>
        </span>
      ),
      key: "HomeTab",
    },
    {
      label: (
        <span className="spanSider">
          <HeartOutlined style={{ fontSize: "20px" }} />
          <span className="spanText"> Notifications </span>
        </span>
      ),
      key: "NotificationsTab",
    },
    {
      label: (
        <span className="spanSider">
          <PlusSquareOutlined style={{ fontSize: "20px" }} />
          <span className="spanText"> Create </span>
        </span>
      ),
      key: "CreateTab",
    },
    {
      label: (
        <span className="spanSider">
          <UserOutlined style={{ fontSize: "20px" }} />
          <span className="spanText"> Profile </span>
        </span>
      ),
      key: "ProfileTab",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemActiveBg: "#f4acb7",
            itemSelectedBg: "#ffccd5",
            itemSelectedColor: "#000000",
            itemHeight: 60,
            itemPaddingInline: 100,
          },
        },
      }}
    >
      <div>
        {collapsed ? (
          <img
            src={logoColapsado}
            className="logoSiderColapsado"
            alt="Logo fakestragram"
          />
        ) : (
          <img src={logo} className="logoSider" alt="Logo fakestagram Sider" />
        )}
        <Menu
          style={{ background: "none" }}
          mode="inline"
          defaultSelectedKeys={[activeTabKey]}
          items={itemsArray}
          onClick={({ key }) => handleTabChange(key)}
          inlineCollapsed={collapsed}
        />
      </div>
    </ConfigProvider>
  );
}
