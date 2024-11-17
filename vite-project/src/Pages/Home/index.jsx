import React, { useState, useEffect } from "react";
import { Feed } from "../../Components/Feed";
import { ParentModalCreate } from "../../Components/ModalesCreate/ParentModalCreate";
import { NotificationsModal } from "../../Components/NotificationsModal";
import { Post } from "../../Components/Post";
import { SiderContent } from "../../Components/SiderContent";
import { ViewProfileSuggestions } from "../../Components/ViewProfileSuggestions";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useUser } from "../../Context/UserContext.jsx";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem.js";
import { getAllProfiles, getUser } from "../../Services/userService.jsx";
import styles from "./Home.module.css";

const profilesPreView = [
  {
    userName: "usuario1",
    picture:
      "https://wallpapers.com/images/hd/meme-profile-picture-vnigweuy4onsxunv.jpg",
  },
  {
    userName: "usuario2",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-xpeQPTyZZocbrRCridMpWGZ1sOcmk4JCg&s",
  },
  {
    userName: "usuario3",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx2xFk_wEb1hLQoDo4Ar3YbhosCPyOCfOgA&s",
  },
  {
    userName: "usuario4",
    picture:
      "https://wallpapers-clan.com/wp-content/uploads/2022/05/meme-pfp-01.jpg",
  },
  {
    userName: "usuario5",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXvn5Jfq578Rr1XapjTcu2BF4J4E7DJEJrLAq1C1R2WRQbcmKiTDr2IbkdrmkFFX0bQk&usqp=CAU",
  },
  {
    userName: "usuario6",
    picture:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyal02RWasVaGd8jqNaoJhmnfcHgRSPisJ3DkFT2VPpadDbCNL",
  },
  {
    userName: "usuario7",
    picture:
      "https://i.pinimg.com/474x/ba/fb/cf/bafbcfca1737d802dda07214e8a680ca.jpg",
  },
  {
    userName: "usuario8",
    picture:
      "https://i.pinimg.com/474x/b5/27/3c/b5273cb2d3580660a3bcb6af3dc66972.jpg",
  },
  {
    userName: "usuario9",
    picture:
      "https://i.pinimg.com/474x/a6/f1/fe/a6f1fec94513512dbd4f8b9f546acb92.jpg",
  },
  {
    userName: "usuario10",
    picture:
      "https://i.pinimg.com/474x/f7/68/19/f7681930b87dadd6dd7e698bd839aabe.jpg",
  },
  {
    userName: "usuario11",
    picture:
      "https://i.pinimg.com/474x/fc/a0/39/fca039fef557464ad4122e0d49de5a16.jpg",
  },
];

export function Home({
  openNotifications,
  closeNotifications,
  isNotificationsActive,
}) {
  const [visible, setVisible] = useState("none");
  const [files, setFiles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const fetchAllUsers = async () => {
    try {
      const data = await getAllProfiles(auth);
      setAllUsers(data);
      console.log("print users: ", allUsers);
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

    setVisible("none");

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
            setVisible={setVisible}
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

        {/* <Post></Post> */}
        {/* <Post image="https://i.pinimg.com/564x/95/ce/8c/95ce8cd5c15594d6470774411bc5a446.jpg" />
          <Post image="https://i.pinimg.com/564x/b3/77/9b/b3779b630e879c741eda9d77c0c9925b.jpg" />
          <Post image="https://i.pinimg.com/564x/85/5c/31/855c319dd6bdeaa28222d88d7a71decd.jpg" />
          <Post image="https://i.pinimg.com/564x/49/23/6b/49236b9fff9e18536557edbce508d52e.jpg" /> */}
        <Feed users={allUsers}></Feed>
      </div>
      <NotificationsModal
        isActive={isNotificationsActive}
        closeNotifications={closeNotifications}
      />
      <ParentModalCreate
        files={files}
        visible={visible}
        setVisible={setVisible}
        onFilesSelected={setFiles}
      />
    </div>
  );
}
