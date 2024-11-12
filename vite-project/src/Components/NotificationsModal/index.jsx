import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Notification } from "../../Components/Notification";
import styles from "./NotificationsModal.module.css";
import { CloseOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

export function NotificationsModal({ isActive, closeNotifications }) {
  const hardcodedNots = [
    {
      user: "usuario1",
      pic: "https://i.pinimg.com/474x/07/a4/32/07a432d61671dc1acf075fb60ff358f7.jpg",
    },
    {
      user: "shrek",
      comment: "hola papucho",
      pic: "https://i.pinimg.com/474x/b2/aa/a2/b2aaa2660cf3a97e70815adfd682ca6c.jpg",
    },
    {
      user: "pepe",
      comment: "fachaaaa",
      pic: "https://i.pinimg.com/474x/99/d8/ff/99d8ff416f0d76529ae9aad44e623915.jpg",
    },
    {
      user: "Pato_123",
      comment: "fachaaaa",
      pic: "https://i.pinimg.com/474x/62/97/ed/6297ed0fd9f0e3b431e3f4087881a2fe.jpg",
    },
    {
      user: "bob_Esponja",
      pic: "https://i.pinimg.com/474x/b5/27/3c/b5273cb2d3580660a3bcb6af3dc66972.jpg",
    },
    {
      user: "Elsa_capunta.23",
      pic: "https://i.pinimg.com/474x/df/96/2a/df962adb2876f7a73b652147a17951f4.jpg",
    },
    {
      user: "Armando_par.12",
      pic: "https://i.pinimg.com/474x/3f/6a/4c/3f6a4c6553866fe5829ed8ab4d5910de.jpg",
    },
    {
      user: "Elsa.Nahoria",
      pic: "https://i.pinimg.com/474x/ba/08/e0/ba08e0b4a38fe8219d19e8ceec292e4c.jpg",
    },
  ];

  return (
    <>
      {" "}
      {isActive && (
        <div className={isActive ? styles.notifications : ""}>
          <div className="notifications-content">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <span className="title is-4"> Notifications </span>
              <CloseOutlined onClick={closeNotifications} />
            </div>
            <ul>
              {hardcodedNots.map((notification) => (
                <Notification
                  user={notification.user}
                  comment={notification.comment}
                  userPic={notification.pic}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
