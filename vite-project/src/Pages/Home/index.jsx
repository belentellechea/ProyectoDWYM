import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { Post } from "../../Components/Post";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
//import "./Home.module.css";
import { ProfilePreView } from "../../Components/ProfilePreView";

const { Header, Footer, Sider, Content } = Layout;

export function Home() {
  return (
    <Layout>
      <Sider theme={"light"} width="20%" className="sider">
        <SiderContent></SiderContent>
      </Sider>
      <Layout>
        <Header theme={"light"}>
          <ViewProfileSuggestions />
        </Header>
        <Content className="content">
          Home
          <ProfilePreView
            picture={"https://bulma.io/assets/images/placeholders/32x32.png"}
            userName={"pepeymarta"}
          />
          <Post></Post>
        </Content>
      </Layout>
    </Layout>
  );
}
