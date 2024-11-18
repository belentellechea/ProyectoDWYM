import React from "react";
import { ProfilePreView } from "../ProfilePreView";
import styles from "./ViewProfileSuggestions.module.css";

export function ViewProfileSuggestions({ profiles }) {
  return (
    <div
      style={{ maxWidth: "90%", alignContent: "center", alignItems: "center" }}
    >
      <span className={styles.viewTitle}> View profile suggestions </span>
      <div className={`${styles.container}`}>
        {profiles?.map((profile) => (
          <ProfilePreView
            className={`scroller-item ${styles.item}`}
            profile={profile}
          ></ProfilePreView>
        ))}
      </div>
    </div>
  );
}
