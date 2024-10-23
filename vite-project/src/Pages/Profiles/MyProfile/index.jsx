import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../Components/SiderContent";
import "./style.css";
import image from "../../../assets/image.png";
import { NotificationsModal } from "../../Components/NotificationsModal";

const { Sider, Content } = Layout;

export function MyProfile({ user, openNotifications, closeNotifications, isNotificationsActive }) {

  return (
    <>
      <Layout className="layout">
        <Sider className="sider" width="20%">
          <SiderContent openNotifications={openNotifications} closeNotifications={closeNotifications} ></SiderContent>
        </Sider>
        <Content className="content" onClick={closeNotifications}>
          <div className="profileInfo">
            <div className="leftInfo">
              <ProfilePhoto size={160} url={image} />
            </div>
            <div className="rightInfo">
              <div className="userEdit">
                <h4 className="subtitle is-4">
                  <strong>{user.username}</strong>
                </h4>
                <button className="button editProfile">edit profile</button>
              </div>
              <div className="postsFriends">
                <p>
                  <strong>11</strong> posts
                </p>
                <p>
                  <strong>17</strong> friends
                </p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={[]} />
          </div>

          <NotificationsModal isActive={isNotificationsActive} />
        </Content>
        
      </Layout>
      
    </>
  );
}
