import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Post } from "../../Components/Post";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
<<<<<<< HEAD
import styles from "./Home.module.css"
import { NotificationsModal } from "../../Components/NotificationsModal";
=======
//import "./Home.module.css";
import { ProfilePreView } from "../../Components/ProfilePreView";
import styles from "./Home.module.css";
import { useState } from "react";
import { Modal } from "../../Components/Modal";
>>>>>>> ea09a087d2e4f5dc653dd65d2708f43795536604

const { Sider, Content } = Layout;

<<<<<<< HEAD
const profilesPreView = [ {
  userName: "usuario1",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario2",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario3",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario4",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario5",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario6",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario7",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario8",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario9",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario10",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
},
{
  userName: "usuario11",
  picture: "https://bulma.io/assets/images/placeholders/32x32.png"
}];

export function Home({ openNotifications, closeNotifications, isNotificationsActive }) {
  return (
    <Layout>
      <Sider theme={"light"} width="20%" className="sider">
        <SiderContent openNotifications={openNotifications} closeNotifications={closeNotifications} ></SiderContent>
      </Sider>
      <Layout>
        <Content className="content" onClick={closeNotifications} style={{ maxWidth: "80%", zIndex: "1", position: "relative"}}>
          <ViewProfileSuggestions profiles={profilesPreView}/>
          <Post></Post>
=======
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
];

export function Home() {
  const [visible, setVisible] = useState("none");

  return (
    <Layout>
      <Sider theme={"light"} width="20%" className="sider">
        <SiderContent setVisible={setVisible} />
      </Sider>
      <Layout>
        {/* <Header theme={"light"} className={`${styles.header}`} style={{ backgroundColor: '#fff' }}>
        </Header> */}
        <Content className="content" style={{ maxWidth: "80%" }}>
          <ViewProfileSuggestions profiles={profilesPreView} />
          <Post></Post>
          <span style={{ justifySelf: "flex-start", alignSelf: "self-start" }}>
            hola
          </span>
>>>>>>> ea09a087d2e4f5dc653dd65d2708f43795536604
        </Content>

        <NotificationsModal isActive={isNotificationsActive} />
      </Layout>
<<<<<<< HEAD

=======
      <Modal visible={visible} setVisible={setVisible} />
>>>>>>> ea09a087d2e4f5dc653dd65d2708f43795536604
    </Layout>
  );
}
