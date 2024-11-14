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
import { getAllProfiles, getUser } from "../../../Services/userService.jsx";
import {
  MenuOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { ConfigurationModal } from "../../../Components/ConfigurationModal/index.jsx";
import { useParams } from "react-router-dom";
import styles from "./FriendProfile.module.css";
import stylesHome from "../../Home/Home.module.css";

const { Sider, Content } = Layout;

export function FriendProfile({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalCreate, setVisibleModalCreate] = useState("none");
  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [friend, setFriend] = useState({});

  const fetchFriend = async () => {
    try {
      const data = await getUser(id, auth.token);
      setFriend(data);
      console.log("data friend: ", data);
    } catch (error) {
      console.error("Error fetching friend:", error);
    }
  };
  useEffect(() => {
    setVisibleModalCreate("none");
    fetchFriend();
    setIsLoading(false);
    console.log("print friend: ", friend);
  }, []);

  // useEffect(() => {
  //   getUser(auth.id, auth.token, updateUser);
  //   setIsLoading(false);
  // }, []);
  // const fetchAllUsers = async () => {
  //   try {
  //     const data = await getAllProfiles(auth);
  //     setAllUsers(data);
  //   } catch (error) {
  //     console.error("Error fetching feed:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllUsers();
  //   setIsLoading(false);
  // }, []);

  // const friend = allUsers.find((profile) => profile._id == id);
  // console.log("print friend: ", friend );

  function openModal() {
    setVisibleModalCreate("block");
  }

  function followUnFollow() {}

  return (
    <>
      {!isLoading ? (
        <div className={stylesHome.layout}>
          <div
            className={
              collapsed ? stylesHome.siderCollapsed : stylesHome.divSider
            }
          >
            <div
              className={
                collapsed
                  ? stylesHome.siderContentCollapsed
                  : stylesHome.siderContent
              }
            >
              <SiderContent
                openNotifications={openNotifications}
                closeNotifications={closeNotifications}
                setVisible={setVisibleModalCreate}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
              ></SiderContent>
            </div>
          </div>
          <div
            className={
              collapsed ? stylesHome.contentCollapsed : stylesHome.content
            }
            onClick={() => {
              closeNotifications();
              setCollapsed(false);
            }}
          >
            <div className={styles.profileInfo}>
              <div className={styles.leftInfo}>
                <ProfilePhoto
                  size={160}
                  url={friend?.profilePicture ? friend.profilePicture : image}
                />
              </div>
              <div className={styles.rightInfo}>
                <div className={styles.nameEdit}>
                  <h1 className={styles.profileName}>
                    {friend?.username ? friend.username : "nombre_usuario"}
                  </h1>
                  <div className={styles.buttonSettings}>
                    <button className={styles.editButton} onClick={openModal}>
                      {" "}
                      follow{" "}
                    </button>
                  </div>
                </div>
                <div className={styles.postsFriends}>
                  <p>
                    <strong>{friend?.posts?.length || 0}</strong> posts
                  </p>
                  <p>
                    <strong>{friend?.friends?.length || 0}</strong> friends
                  </p>
                </div>
                <p>{friend?.description}</p>
              </div>
            </div>
            <div className="photos">
              <Grid photos={friend?.posts} />
            </div>
            <NotificationsModal isActive={isNotificationsActive} />
          </div>
          <ParentModalCreate
            files={files}
            visible={visibleModalCreate}
            setVisible={setVisibleModalCreate}
            onFilesSelected={setFiles}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
