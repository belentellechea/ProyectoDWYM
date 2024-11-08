import { Layout } from "antd";
import React, { useState } from "react";
import { Post } from "../../Components/Post";
import { SiderContent } from "../../Components/SiderContent";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
import { ParentModalCreate } from "../../Components/ModalesCreate/ParentModalCreate";
import { NotificationsModal } from "../../Components/NotificationsModal";
import styles from "./Home.module.css";
import { Feed } from "../../Components/Feed";

const { Sider, Content } = Layout;

const profilesPreView = [
  {
    userName: "usuario1",
    picture:
      "https://wallpapers.com/images/hd/meme-profile-picture-vnigweuy4onsxunv.jpg",
  },
  {
    userName: "usuario2",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-xpeQPTyZZocbrRCridMpWGZ1sOcmk4JCg&s",
  },
  {
    userName: "usuario3",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx2xFk_wEb1hLQoDo4Ar3YbhosCPyOCfOgA&s",
  },
  {
    userName: "usuario4",
    picture:
      "https://wallpapers-clan.com/wp-content/uploads/2022/05/meme-pfp-01.jpg",
  },
  {
    userName: "usuario5",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXvn5Jfq578Rr1XapjTcu2BF4J4E7DJEJrLAq1C1R2WRQbcmKiTDr2IbkdrmkFFX0bQk&usqp=CAU",
  },
  {
    userName: "usuario6",
    picture:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyal02RWasVaGd8jqNaoJhmnfcHgRSPisJ3DkFT2VPpadDbCNL",
  },
  {
    userName: "usuario7",
    picture:
      "https://i.pinimg.com/474x/ba/fb/cf/bafbcfca1737d802dda07214e8a680ca.jpg",
  },
  {
    userName: "usuario8",
    picture:
      "https://i.pinimg.com/474x/b5/27/3c/b5273cb2d3580660a3bcb6af3dc66972.jpg",
  },
  {
    userName: "usuario9",
    picture:
      "https://i.pinimg.com/474x/a6/f1/fe/a6f1fec94513512dbd4f8b9f546acb92.jpg",
  },
  {
    userName: "usuario10",
    picture:
      "https://i.pinimg.com/474x/f7/68/19/f7681930b87dadd6dd7e698bd839aabe.jpg",
  },
  {
    userName: "usuario11",
    picture:
      "https://i.pinimg.com/474x/fc/a0/39/fca039fef557464ad4122e0d49de5a16.jpg",
  },
];

export function Home({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const [visible, setVisible] = useState("none");
  const [files, setFiles] = useState([]);

  // si abro las notificaciones se colapsa el sider
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        theme={"light"}
        width={collapsed ? 0 : "20%"}
        collapsedWidth={100}
        className="sider"
        trigger={null}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
          setCollapsed(false);
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          setCollapsed(true);
        }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          insetInlineStart: 0,
          top: 0,
          bottom: 0,
          scrollbarWidth: "thin",
        }}
      >
        <SiderContent
          openNotifications={openNotifications}
          closeNotifications={closeNotifications}
          setVisible={setVisible}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        ></SiderContent>
      </Sider>
      <Layout
      // style={{
      //   marginLeft: collapsed ? "0%" : "20%", // Ajuste automático al ancho de Sider
      //   transition: "0.5s",
      // }}
      >
        <Content
          className="content"
          onClick={closeNotifications}
          style={{
            marginLeft: collapsed ? "7%" : "20%", // Ajuste automático al ancho de Sider
            transition: "0.5s",
          }}
        >
          <ViewProfileSuggestions profiles={profilesPreView} />

          <Post></Post>
          <Post></Post>
          <Post></Post>
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
