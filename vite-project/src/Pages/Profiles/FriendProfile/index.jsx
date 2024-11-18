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
import { ModalCreate } from "../../../Components/ModalesCreate/ModalCreate/index.jsx";
import { ModalPreview } from "../../../Components/ModalesCreate/ModalPreview/index.jsx";

import {
  followFriend,
  getAllProfiles,
  getUser,
  unfollowFriend,
} from "../../../Services/userService.jsx";
import {
  MenuOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { ConfigurationModal } from "../../../Components/ConfigurationModal/index.jsx";
import { useParams } from "react-router-dom";
import styles from "./FriendProfile.module.css";
import stylesHome from "../../Home/Home.module.css";

export function FriendProfile({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser, addFriend, removeFriend } = useUser();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const [siguiente, setSiguiente] = useState(false);

  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [friend, setFriend] = useState({});

  const [doIFollowThem, setDoIFollowThem] = useState(false);
  console.log("do i follow them: ", doIFollowThem);

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
    getUser(auth.id, auth.token, updateUser);
    setVisibleModalCreate(false);
    fetchFriend();
    setIsLoading(false);

    const followUnfollow = user?.friends?.some((f) => f._id == id);
    console.log("do i follow them 2: ", doIFollowThem);
    setDoIFollowThem(followUnfollow);
    console.log("doIFollowThem 3: ", doIFollowThem);
  }, []);

  function openModal() {
    setVisibleModalCreate("block");
  }

  function followUnFollow() {
    if (doIFollowThem) {
      unfollowFriend(auth, friend, removeFriend);
      setDoIFollowThem(false);
    } else {
      followFriend(auth, friend, addFriend);
      setDoIFollowThem(true);
    }
  }

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
                    <button
                      className={styles.editButton}
                      onClick={followUnFollow}
                    >
                      {doIFollowThem ? " unfollow " : " follow "}
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
              <Grid posts={friend?.posts} />
            </div>
            <NotificationsModal isActive={isNotificationsActive} />
          </div>
          {visibleModalCreate && (
            <ModalCreate
              setFiles={setFiles}
              setVisibleModalCreate={setVisibleModalCreate}
              setSiguiente={setSiguiente}
            />
          )}
          {siguiente && (
            <ModalPreview
              siguiente={siguiente}
              setSiguiente={setSiguiente}
              files={files}
              setFiles={setFiles}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
