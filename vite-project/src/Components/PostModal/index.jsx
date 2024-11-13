import React, { useEffect, useState } from "react";
import styles from './PostModal.module.css'
import { Post } from "../Post";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { PostBottom } from "../Post_Bottom";
import { getAllProfiles } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";

export function PostModal({ post, isActive, currentPost, closeModal }) {
    const { auth } = useAuth();
    const [allUsers, setAllUsers] = useState([]);
    
    const fetchAllUsers = async () => {
        try {
          const data = await getAllProfiles(auth);
          setAllUsers(data);
          console.log("print users: ", allUsers);
        } catch (error) {
          console.error("Error fetching feed:", error);
        }
      }

    const user = allUsers.find((profile) => profile._id == post.user);

    useEffect(() => {
        fetchAllUsers();
    }, []);


    return ( 
        <div className={`modal ${isActive && currentPost == post._id ? "is-active" : ""}`}>
            <div className={`modal-background ${styles.modalBackground}`} onClick={closeModal}></div>
            <div className={`modal-content ${styles.modalContent}`}>
                <div className="box">
                    <div className="divPostTop flex-container" >
                        <div className="avatarYNombre">
                            {/* <Avatar size="small" className="avatarIcon" icon={<UserOutlined />} /> */}
                            <Avatar
                            size={40}
                            className="avatarIcon"
                            src={user?.profilePicture}
                            icon={!user?.profilePicture && <UserOutlined />}
                            />
                            {/* <p className="title is-6"> Profile Name </p> */}
                            <p className="title is-6">
                            {" "}
                            {user?.username ? user.username : "Profile Name"}{" "}
                            </p>
                        </div>
                        <MoreOutlined id="moreOutlined" style={{ fontSize: 25 }} />
                    </div>

                    <div className={styles.postPostInfo}>
                        <img
                            src={`http://localhost:3001/${post.imageUrl}`}
                            style={{ width: "300px", height: "300px" }}
                        />
                        <PostBottom post={post}></PostBottom>
                    </div>
                </div> 
            </div>
        </div>
    );
}