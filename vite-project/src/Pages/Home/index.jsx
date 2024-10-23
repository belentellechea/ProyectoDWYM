import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Post } from "../../Components/Post";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
//import "./Home.module.css";
import { ProfilePreView } from "../../Components/ProfilePreView";
import styles from "./Home.module.css";

const { Header, Footer, Sider, Content } = Layout;

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
        </Content>
      </Layout>
      <Modal visible={visible} setVisible={setVisible} />
    </Layout>
  );
}
