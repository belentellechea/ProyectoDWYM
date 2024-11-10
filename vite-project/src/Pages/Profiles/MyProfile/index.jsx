import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import "./style.css";
import image from "../../../assets/user.png";
import { NotificationsModal } from "../../../Components/NotificationsModal";
import { useState, useEffect } from "react";
import { ParentModalCreate } from "../../../Components/ModalesCreate/ParentModalCreate";
import { EditModal } from "../../../Components/EditModal";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { getUser } from "../../../Services/userService.jsx";

const { Sider, Content } = Layout;

export function MyProfile({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const [visible, setVisible] = useState("none");
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalCreate, setVisibleModalCreate] = useState("none");
  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

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
          <Sider
            theme={"light"}
            width={collapsed ? 0 : "20%"}
            collapsedWidth={100}
            className="sider"
            trigger={null}
            breakpoint="lg"
            onBreakpoint={(broken) => {
              console.log(broken);
              setCollapsed(false);
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
              setCollapsed(true);
            }}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              insetInlineStart: 0,
              top: 0,
              bottom: 0,
              scrollbarWidth: "thin",
            }}
          >
            <SiderContent
              openNotifications={openNotifications}
              closeNotifications={closeNotifications}
              setVisible={setVisibleModalCreate}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            ></SiderContent>
          </Sider>
          <Layout>
            <Content
              className="content"
              onClick={closeNotifications}
              style={{
                marginLeft: collapsed ? "7%" : "20%", // Ajuste automático al ancho de Sider
                transition: "0.5s",
              }}
            >
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
              <div className="photos">
                <Grid photos={user?.posts} />
              </div>
              <NotificationsModal isActive={isNotificationsActive} />
            </Content>
          </Layout>
          <EditModal
            visible={visible}
            setVisible={setVisible}
            userData={user}
          />
          <ParentModalCreate
            files={files}
            visible={visibleModalCreate}
            setVisible={setVisibleModalCreate}
            onFilesSelected={setFiles}
          />
        </Layout>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
