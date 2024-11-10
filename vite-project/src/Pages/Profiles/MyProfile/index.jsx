import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import "./style.css";
import image from "../../../assets/user.png";
import { NotificationsModal } from "../../../Components/NotificationsModal";
import { useState, useEffect } from "react";
import { EditModal } from "../../../Components/EditModal";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { getUser } from "../../../Services/userService.jsx"

const { Sider, Content } = Layout;

export function MyProfile({ openNotifications, closeNotifications, isNotificationsActive }) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const [visible, setVisible] = useState("none"); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    getUser(auth.id, auth.token, updateUser);
    setIsLoading(false);
  }, []);

  function openModal() {
    setVisible("block");
  }

  return (
    <>
      {!isLoading ? (
        <Layout className="layout">
          <Sider className="sider" width="20%">
            <SiderContent
              openNotifications={openNotifications}
              closeNotifications={closeNotifications}
            ></SiderContent>
          </Sider>

          <Content className="content" onClick={closeNotifications}>
            <div className="profileInfo">
              <div className="leftInfo">
                <ProfilePhoto
                  size={160}
                  url={user?.profilePicture ? user.profilePicture : image}
                />
              </div>
              <div className="postsFriends">
                <p>
                  <strong>{user?.posts?.length || 0}</strong> posts
                </p>
                <p>
                  <strong>{user?.friends?.length || 0}</strong> friends
                </p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={user?.posts} />
          </div>
          <NotificationsModal isActive={isNotificationsActive} />
        </Content>
          <EditModal
            visible={visible}
            setVisible={setVisible}
            userData={user}
          />
        </Layout>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
