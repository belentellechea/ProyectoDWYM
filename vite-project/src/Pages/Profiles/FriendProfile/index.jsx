import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { SiderContent } from "../../../Components/SiderContent";
import "./style.css";
import image from "../../../assets/user.png";
import { NotificationsModal } from "../../../Components/NotificationsModal";
import { useState, useEffect } from "react";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { ModalCreate } from "../../../Components/ModalesCreate/ModalCreate/index.jsx";
import { ModalPreview } from "../../../Components/ModalesCreate/ModalPreview/index.jsx";
import { followFriend, getUser, unfollowFriend } from "../../../Services/userService.jsx";
import { useParams } from "react-router-dom";
import styles from "./FriendProfile.module.css";
import stylesHome from "../../Home/Home.module.css";

export function FriendProfile({ openNotifications, closeNotifications, isNotificationsActive }) {
  const { auth } = useAuth();
  const { user, updateUser, addFriend, removeFriend } = useUser();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const [siguiente, setSiguiente] = useState(false);

  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const [friend, setFriend] = useState({});
  const [doIFollowThem, setDoIFollowThem] = useState(false);
  const [followers, setFollowers] = useState(friend?.friends?.length);

  const fetchFriend = async () => {
    try {
      const data = await getUser(id, auth.token);
      setFriend(data);
    } catch (error) {
      console.error("Error fetching friend:", error);
    }
  };

  useEffect(() => {
    fetchFriend();
    getUser(auth.id, auth.token, updateUser);
    setVisibleModalCreate(false);
    
    console.log("friend renderización after fetch: ", friend);
    setIsLoading(false);

    const followUnfollow = user?.friends?.some((f) => f._id == id);
    setDoIFollowThem(followUnfollow);
    setFollowers(friend?.friends?.length);
  }, []);

  async function followUnFollow() {
    if (doIFollowThem) {
        setFollowers(followers -1);
      await unfollowFriend(auth, friend, removeFriend);
      setDoIFollowThem(false);
    } else {
      await followFriend(auth, friend, addFriend);
      setDoIFollowThem(true);
      setFollowers(friend.friends.length);
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
                    {friend?.username ? friend.username : "username"}
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
                    <strong>{followers > 0 ? followers : 0}</strong> friends
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
