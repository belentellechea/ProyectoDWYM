import { ProfilePhoto } from "../../Components/ProfilePhoto"
import { Grid } from "../../Components/Grid"
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import "./style.css"

const { Sider, Content } = Layout;

export function MyProfile() {
    return (
        <>
            <Layout className="layout">
                <Sider className="sider">
                    <SiderContent></SiderContent>
                </Sider>
                <Content className="content">
                    <div className="profileInfo">
                        <div className="leftInfo"> 
                            <ProfilePhoto size={100} url="vite-project\src\assets\image.png"/>
                        </div>
                        <div className="rightInfo">
                            <div className="userEdit">
                                <h2><strong>username</strong></h2>
                                <button className="button editProfile">edit profile</button>
                            </div>
                            <div className="postsFriends">
                                <p><strong>11</strong>posts</p>
                                <p><strong>17</strong>friends</p>
                            </div>
                            <div className="description">
                                <p><strong>name - surname</strong></p>
                                <p>my profile description</p>
                            </div>
                        </div>
                    </div>
                    <div className="photos">
                        <Grid photos={[]}/>
                    </div>
                </Content>
            </Layout>
        </>
    )
}