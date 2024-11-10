import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const { Sider, Content } = Layout;

const url = `http://localhost:3001/api/user/profile`;

export function FriendProfile({ friends }) {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [friendButton, setfriendButton] = useState(" ");
  const [visible, setVisible] = useState("none");
  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  async function fetchProfileDetails() {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setProfile(data);

      //const isFriend = friends.some(friend => friend._id == data.user._id);
      //setfriendButton (isFriend ? "Delete friend" : "Add friend")
    } catch (error) {
      console.log("Error fetching profile details:", error);
    }
  }

  useEffect(() => {
    fetchProfileDetails();
  }, [id]);

  return (
    <>
      {profile && (
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
              onClick={() => {
                closeNotifications();
                setCollapsed(false);
              }}
              style={{
                marginLeft: collapsed ? "7%" : "20%", // Ajuste automático al ancho de Sider
                transition: "0.5s",
              }}
            >
              <div className="profileInfo">
                <div className="leftInfo">
                  <ProfilePhoto size={160} url={profile.user.profileImage} />
                </div>
                <div className="rightInfo">
                  <div className="userEdit">
                    <h4 className="subtitle is-4">
                      <strong>{profile.user.username}</strong>
                    </h4>
                    <button className="button editProfile">
                      {friendButton}
                    </button>
                  </div>
                  <div className="postsFriends">
                    <p>
                      <strong>{profile.posts?.length || 0}</strong> posts
                    </p>
                    <p>
                      <strong>{profile.user.friends?.length || 0}</strong>{" "}
                      friends
                    </p>
                  </div>
                </div>
              </div>
              <div className="photos">
                <Grid photos={profile.posts} />
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
}
