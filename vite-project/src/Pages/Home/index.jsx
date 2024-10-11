import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
//import "./Home.module.css";
import { ProfilePreView } from "../../Components/ProfilePreView";

const { Header, Footer, Sider, Content } = Layout;

export function Home() {
    return (
        <Layout style={{minHeight: '1400px', minWidth: '1500px'}}>
            <Sider theme={"light"}>
                <SiderContent></SiderContent>
            </Sider>
            <Layout>
                <Header theme={"light"}>
                    <ViewProfileSuggestions/>
                </Header>
                <Content>
                    Home
                    <ProfilePreView picture={"https://bulma.io/assets/images/placeholders/32x32.png"} userName={"pepeymarta"} />
                </Content>
                <Footer>
                    footer
                </Footer>
            </Layout>
        </Layout>
    );
}