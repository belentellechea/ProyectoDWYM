import React, { useState, useEffect } from "react";
import { Feed } from "../../Components/Feed";
import { NotificationsModal } from "../../Components/NotificationsModal";
import { SiderContent } from "../../Components/SiderContent";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useUser } from "../../Context/UserContext.jsx";
import { getAllProfiles, getUser } from "../../Services/userService.jsx";
import styles from "./Home.module.css";
import { ModalCreate } from "../../Components/ModalesCreate/ModalCreate/index.jsx";
import { ModalPreview } from "../../Components/ModalesCreate/ModalPreview/index.jsx";


export function Home({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const [visible, setVisible] = useState(false);
  const [siguiente, setSiguiente] = useState(false);

  const [files, setFiles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const { auth } = useAuth();
  const { user, updateUser } = useUser();

  const fetchAllUsers = async () => {
    try {
      const data = await getAllProfiles(auth);
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  useEffect(() => {
    // Define la media query para el ancho máximo de 700px
    const mediaQuery = window.matchMedia("(max-width: 900px)").matches;
    if (mediaQuery === true) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }

    // get user
    getUser(auth.id, auth.token, updateUser);

    // get all users
    fetchAllUsers();
  }, []);

  return (
    <div className={styles.layout}>
      <div className={collapsed ? styles.siderCollapsed : styles.divSider}>
        <div
          className={
            collapsed ? styles.siderContentCollapsed : styles.siderContent
          }
        >
          <SiderContent
            openNotifications={openNotifications}
            closeNotifications={closeNotifications}
            setVisibleModalCreate={setVisible}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          ></SiderContent>
        </div>
      </div>
      <div
        className={collapsed ? styles.contentCollapsed : styles.content}
        onClick={() => {
          closeNotifications();
          setCollapsed(false);
        }}
      >
        <ViewProfileSuggestions
          profiles={allUsers?.filter((profile) => profile._id !== user.id)}
        />
        <Feed users={allUsers}></Feed>
      </div>
      <NotificationsModal
        isActive={isNotificationsActive}
        closeNotifications={closeNotifications}
      />
      {visible && (
        <ModalCreate
          setFiles={setFiles}
          setVisibleModalCreate={setVisible}
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
  );
}
