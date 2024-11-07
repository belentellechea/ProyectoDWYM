import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Notification } from "../../Components/Notification";
import styles from "./NotificationsModal.module.css";

const { Sider, Content } = Layout;

export function NotificationsModal({ isActive, onClose }) {
  const hardcodedNots = [
    {
      user: "usuario1",
    },
    {
      user: "shrek",
      comment: "hola papucho",
    },
  ];

  return (
    // <Layout>
    //     <Sider theme={"light"} width="20%" className="sider">
    //         <SiderContent></SiderContent>
    //     </Sider>
    //     <Layout>
    //         <Content className="content" style={{ maxWidth: "80%" }}>
    //             <ul>
    //                 {hardcodedNots.map( (notification) => (
    //                     <Notification user={notification.user} comment={notification.comment} />
    //                 ))}
    //             </ul>
    //         </Content>
    //     </Layout>
    // </Layout>
    <>
      {" "}
      {isActive && (
        <div
          className={`notifications ${isActive ? "is-active" : ""} ${
            styles.notifications
          } shadow`}
        >
          <div className="notifications-content">
            <span className="title is-4"> Notifications </span>
            <ul>
              {hardcodedNots.map((notification) => (
                <Notification
                  user={notification.user}
                  comment={notification.comment}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
