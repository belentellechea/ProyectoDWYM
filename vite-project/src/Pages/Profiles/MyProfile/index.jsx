import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import image from "../../../assets/user.png";
import { NotificationsModal } from "../../../Components/NotificationsModal";
import { useState, useEffect } from "react";
import { ParentModalCreate } from "../../../Components/ModalesCreate/ParentModalCreate";
import { EditModal } from "../../../Components/EditModal";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { getUser } from "../../../Services/userService.jsx";
import stylesHome from "../../Home/Home.module.css";
import styles from "./MyProfile.module.css";

import {
  MenuOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { ConfigurationModal } from "../../../Components/ConfigurationModal/index.jsx";

export function MyProfile({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const [visible, setVisible] = useState("none");
  const [visibleConfiguration, setVisibleConfiguration] = useState("none");
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const [files, setFiles] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    getUser(auth.id, auth.token, updateUser);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUser(auth.id, auth.token, updateUser);
    setIsLoading(false);
  }, [user?.post]);

  function openModal() {
    setVisible("block");
  }

  function openConfigurationModal() {
    setVisibleConfiguration("block");
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
                  url={user?.profilePicture ? user.profilePicture : image}
                />
              </div>
              <div className={styles.rightInfo}>
                <div className={styles.nameEdit}>
                  <h1 className={styles.profileName}>
                    {user?.username ? user.username : "nombre_usuario"}
                  </h1>
                  <div className={styles.buttonSettings}>
                    <button className={styles.editButton} onClick={openModal}>
                      {" "}
                      edit profile{" "}
                    </button>
                    <SettingOutlined
                      id={styles.settingsIcon}
                      style={{ fontSize: "26px", marginLeft: "10px" }}
                      onClick={openConfigurationModal}
                    />
                  </div>
                </div>
                <div className={styles.postsFriends}>
                  <p>
                    <strong>{user?.posts?.length || 0}</strong> posts
                  </p>
                  <p>
                    <strong>{user?.friends?.length || 0}</strong> friends
                  </p>
                </div>
                <p>{user?.description}</p>
              </div>
            </div>
            <div className="photos">
              <Grid photos={user?.posts} />
            </div>
            <NotificationsModal isActive={isNotificationsActive} />
          </div>
          <EditModal
            visible={visible}
            setVisible={setVisible}
            userData={user}
          />
          
          <ConfigurationModal
          visible={visibleConfiguration}
          setVisible={setVisibleConfiguration}
          />

          {visibleModalCreate && (
            <ParentModalCreate
              files={files}
              visible={visibleModalCreate}
              setVisible={setVisibleModalCreate}
              onFilesSelected={setFiles}
            />
          )}
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
