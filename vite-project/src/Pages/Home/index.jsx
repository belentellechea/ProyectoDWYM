import React from "react";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";

const { Header, Footer, Sider, Content } = Layout;

export function Home() {
    return (
        <Layout>
            <Sider width="25%" >
                <SiderContent></SiderContent>
            </Sider>
        </Layout>
    );
}