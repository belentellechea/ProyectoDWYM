import { ProfilePhoto } from "../../Components/ProfilePhoto";
import { Grid } from "../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import "./style.css";
import image from "../../assets/image.png";

const { Sider, Content } = Layout;

export function MyProfile() {
  return (
    <>
      <Layout className="layout">
        <Sider className="sider" width="20%">
          <SiderContent></SiderContent>
        </Sider>
        <Content className="content">
          <div className="profileInfo">
            <div className="leftInfo">
              <ProfilePhoto size={160} url={image} />
            </div>
            <div className="rightInfo">
              <div className="userEdit">
                <h4 className="subtitle is-4">
                  <strong>username</strong>
                </h4>
                <button className="button editProfile">edit profile</button>
              </div>
              <div className="postsFriends">
                <p>
                  <strong>11</strong>posts
                </p>
                <p>
                  <strong>17</strong>friends
                </p>
              </div>
              <div className="description">
                <p>
                  <strong>name - surname</strong>
                </p>
                <p>my profile description</p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={[]} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
