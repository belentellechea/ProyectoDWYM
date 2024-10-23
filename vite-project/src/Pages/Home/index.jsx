import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Post } from "../../Components/Post";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
import styles from "./Home.module.css"
import { NotificationsModal } from "../../Components/NotificationsModal";

const { Sider, Content } = Layout;

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
        </Content>

        <NotificationsModal isActive={isNotificationsActive} />
      </Layout>

    </Layout>
  );
}
