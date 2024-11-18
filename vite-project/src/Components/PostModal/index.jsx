import React, { useEffect, useState } from "react";
import styles from "./PostModal.module.css";
import { Post } from "../Post";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { PostBottom } from "../Post_Bottom";
import { getAllProfiles } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";
import { IoClose } from "react-icons/io5";
import { likePost, postComment, unLike } from "../../Services/postService";
import { useUser } from "../../Context/UserContext";

import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  RightOutlined,
  SendOutlined,
} from "@ant-design/icons";

export function PostModal({
  post,
  isActive,
  currentPost,
  setIsPostModalActive,
}) {
  const { updatePost } = useUser();
  const { auth } = useAuth();
  const [allUsers, setAllUsers] = useState([]);

  const doILikeThis = post.likes.includes(auth.id);
  const [heartIcon, setHeartIcon] = useState(doILikeThis);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const data = await getAllProfiles(auth);
      setAllUsers(data);
      console.log("print users: ", allUsers);
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  const user = allUsers.find((profile) => profile._id == post.user);

  function likeUnLike() {
    if (heartIcon) {
      setHeartIcon(!heartIcon);
      unLike(post, auth, updatePost);
    } else {
      setHeartIcon(!heartIcon);
      likePost(post, auth, updatePost);
    }
  }

  useEffect(() => {
    setHeartIcon(doILikeThis);
  }, [post]);

  return (
    <div className={styles.modal}>
      <IoClose
        className={styles.closeModalIcon}
        onClick={() => {
          setIsPostModalActive(false);
        }}
      />
      <div className={styles.box}>
        <div className={styles.columns}>
          <img
            src={`http://localhost:3001/${post.imageUrl}`}
            className={styles.postImage}
          />
          <div className={styles.rightColumn}>
            <div className={styles.rightTop}>
              <div className={styles.avatarYNombre}>
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
            <div className={styles.postComments}>
              {/* <PostBottom post={post}></PostBottom> */}
              <div className={styles.commentsList}>
                {post?.comments?.map((comment) => (
                  <p> {comment} </p>
                ))}
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
                <p>
                  <strong> user_name </strong> hola{" "}
                </p>
              </div>
              <div className={styles.commentsAndLikes}>
                <div className={styles.likes}>
                  <div className={styles.iconos} style={{ fontSize: 25 }}>
                    <div onClick={likeUnLike}>
                      {!heartIcon ? (
                        <HeartOutlined
                          className="heartIcon"
                          style={{
                            marginRight: 10,
                            marginLeft: 10,
                            marginTop: 0,
                          }}
                        />
                      ) : (
                        <HeartFilled
                          style={{
                            marginRight: 10,
                            marginLeft: 10,
                            color: "rgb(206, 68, 68)",
                          }}
                          className="heartIcon"
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.likesCount}>
                    <p>
                      <strong> {post?.likes.length} likes</strong>
                    </p>
                  </div>
                </div>
                <form className={styles.commentSend}>
                  <input
                    className={styles.commentInput}
                    type="text"
                    placeholder="Add a comment..."
                    //value={comment}
                    //   onChange={(e) => setComment(e.target.value)}
                  ></input>
                  <RightOutlined
                    className={styles.sendButton}
                    //   onClick={publishComment}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
