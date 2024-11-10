import React from "react";
import styles from "./Notification.module.css";
import { Avatar } from "antd";

export function Notification({ user, post, comment, userPic }) {
  return (
    <span className={styles.span}>
      <Avatar size={50} src={userPic} className={styles.picture} />
      {comment == null ? (
        <label className={styles.label}>
          {" "}
          <strong> {user} </strong>
          <p>&nbsp;</p>liked your post{" "}
        </label>
      ) : (
        <label className={styles.label}>
          {" "}
          <strong> {user} </strong>
          <p>&nbsp;</p>commented '{comment}' in your post{" "}
        </label>
      )}
    </span>
  );
}
