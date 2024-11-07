import { Layout } from "antd";
import React, { useState } from "react";
import { ModalCreate } from "../../Components/ModalesCreate/ModalCreate";
import { NotificationsModal } from "../../Components/NotificationsModal";
import { Post } from "../../Components/Post";
import { SiderContent } from "../../Components/SiderContent";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
import { ParentModalCreate } from "../../Components/ModalesCreate/ParentModalCreate";
import { NotificationsModal } from "../../Components/NotificationsModal";
import { ProfilePreView } from "../../Components/ProfilePreView";
import styles from "./Home.module.css";
import { useState } from "react";
import { ModalCreate } from "../../Components/ModalCreate";
import { Feed } from "../../Components/Feed";
import { useAuth } from "../../Context/AuthContext.jsx";

const { Sider, Content } = Layout;

const profilesPreView = [
  {
    userName: "usuario1",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario2",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario3",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario4",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario5",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario6",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario7",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario8",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario9",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario10",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
  {
    userName: "usuario11",
    picture: "https://bulma.io/assets/images/placeholders/32x32.png",
  },
];

export function Home({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const [visible, setVisible] = useState("none");
  const [files, setFiles] = useState([]);

  const { auth, updateAuth} = useAuth();


  return (
    <Layout>
      <Sider theme={"light"} width="20%" className="sider">
        <SiderContent
          openNotifications={openNotifications}
          closeNotifications={closeNotifications}
          setVisible={setVisible}
        ></SiderContent>
      </Sider>
      <Layout>
        <Content
          className="content"
          onClick={closeNotifications}
          style={{ maxWidth: "80%", zIndex: "1", position: "relative" }}
        >
          <ViewProfileSuggestions profiles={profilesPreView} />

          <Post></Post>
          <Feed></Feed>
        </Content>
        <NotificationsModal isActive={isNotificationsActive} />
      </Layout>
      <ParentModalCreate
        files={files}
        visible={visible}
        setVisible={setVisible}
        onFilesSelected={setFiles}
      />
    </Layout>
  );
}
