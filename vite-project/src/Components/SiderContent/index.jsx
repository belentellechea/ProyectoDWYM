import React, { useEffect, useState } from "react";
import { Menu, ConfigProvider } from "antd";
import "./SiderContent.css";
import logo from "../../assets/logoSider2.png";
import logoColapsado from "../../assets/logo_Collapsed.png";
import { HomeFilled, HeartOutlined, PlusSquareOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

export function SiderContent({
  openNotifications,
  closeNotifications,
  setVisibleModalCreate,
  setCollapsed,
  collapsed,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTabKey, setActiveTabKey] = useState(() => {
    if (location.pathname === "/home") return "HomeTab";
    if (location.pathname === "/profile") return "ProfileTab";
    return "NotificationsTab";
  });
  const [mode, setMode] = useState(
    window.innerWidth >= 1200 ? "vertical" : "horizontal"
  );
  useEffect(() => {
    const handleResize = (width) => {
      setMode(window.innerWidth >= 1200 ? "vertical" : "horizontal");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openModal() {
    setVisibleModalCreate(true);
  }

  function closeSideBar() {
    setCollapsed(true);
  }
  function openSideBar() {
    setCollapsed(false);
  }

  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveTabKey("HomeTab");
    } else if (location.pathname === "/profile") {
      setActiveTabKey("ProfileTab");
    } else {
      setActiveTabKey("NotificationsTab");
    }
  }, [location.pathname, activeTabKey]);

  // This makes de tab mark the page where it was previous to Notifications when it closes.
  let previousTab = "/home";
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
      navigate("/home");
      previousTab = "HomeTab";
      completeCloseNotifications();
      openSideBar();
    } else if (key === "NotificationsTab") {
      closeSideBar();
      openNotifications();
    } else if (key === "CreateTab") {
      openModal();
      closeNotifications();
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
    <div className="siderContent">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemActiveBg: "#f4acb7",
              itemSelectedBg: "#ffccd5",
              itemSelectedColor: "#000000",
              itemPaddingInline: "50px",
              itemHeight: "70px",
              horizontalItemSelectedColor: "#000000",
              horizontalItemSelectedBg: "transparent",
              horizontalLineHeight: "50px",
            },
          },
        }}
      >
        <div className="siderContent">
          {collapsed ? (
            <img
              src={logoColapsado}
              className="logoSiderColapsado"
              alt="Logo fakestragram"
            />
          ) : (
            <img
              src={logo}
              className="logoSider"
              alt="Logo fakestagram Sider"
            />
          )}
          <Menu
            style={{ background: "none", width: "100%" }}
            mode={mode}
            defaultSelectedKeys={[activeTabKey]}
            items={itemsArray}
            onClick={({ key }) => handleTabChange(key)}
            inlineCollapsed={collapsed}
          />
        </div>
      </ConfigProvider>
    </div>
  );
}
