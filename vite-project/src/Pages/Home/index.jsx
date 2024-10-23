import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Post } from "../../Components/Post";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
//import "./Home.module.css";
import { ProfilePreView } from "../../Components/ProfilePreView";
import { Modal } from "../../Components/Modal";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

export function Home() {
  const [visible, setVisible] = useState("none");

  return (
    <Layout>
      <Sider theme={"light"} width="20%" className="sider">
        <SiderContent setVisible={setVisible} />
      </Sider>
      <Layout>
        <Header theme={"light"}>
          <ViewProfileSuggestions />
        </Header>
        <Content className="content">
          <ProfilePreView
            picture={"https://bulma.io/assets/images/placeholders/32x32.png"}
            userName={"pepeymarta"}
          />
          <Post></Post>
        </Content>
      </Layout>
      <Modal visible={visible} setVisible={setVisible} />
    </Layout>
  );
}
