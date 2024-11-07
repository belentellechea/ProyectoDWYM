import React from "react";
import styles from "./Notification.module.css";

export function Notification({ user, post, comment }) {
  return (
    <span className={styles.span}>
      <figure className={`image is-16x16 ${styles.picture}`}>
        <img src="https://bulma.io/assets/images/placeholders/16x16.png" />
      </figure>

      {comment == null ? (
        <label className={styles.label}>
          {" "}
          <strong> {user} </strong> liked your post{" "}
        </label>
      ) : (
        <label className={styles.label}>
          {" "}
          <strong> {user} </strong> commented '{comment}' in your post{" "}
        </label>
      )}
    </span>
  );
}
