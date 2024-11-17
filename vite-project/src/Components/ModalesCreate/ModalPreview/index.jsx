import styles from "./ModalPreview.module.css";
import { useState, useEffect } from "react";
import { Avatar } from "antd";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { uploadPost } from "../../../Services/postService";

export function ModalPreview({ siguiente, setSiguiente, files }) {
  const { user, addPost } = useUser();
  const { auth } = useAuth();

  const [caption, setCaption] = useState("");

  function closeModal() {
    setSiguiente("none");
  }

  function compartir() {
    uploadPost(files[0], caption, addPost, auth);
    closeModal();
  }

  return (
    <div className="modal" style={{ display: siguiente }}>
      <div className="modal-background"></div>
      <div className={`modal-content ${styles.modalContent}`}>
        <div className={`card ${styles.preview}`}>
          <div className={`card-header ${styles.headerPreview}`}>
            <button className={styles.botonAtras}> back </button>
            <h1 className="title is-6"> Create new post </h1>
            <button className={styles.compartir} onClick={() => compartir()}>
              {" "}
              Compartir
            </button>
          </div>
          <div
            className="card-content"
            style={{
              padding: 0,
              margin: 0,
              overflow: "hidden",
              height: "inherit",
            }}
          >
            <div
              className="columns is-mobile"
              style={{ height: "-webkit-fill-available" }}
            >
              <div
                className="column"
                style={{ overflow: "hidden", padding: 0 }}
              >
                {files.map((file) => (
                  <div style={{ marginTop: "0.8rem", overflow: "hidden" }}>
                    <img
                      className={styles.uploadedPhoto}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      onClick={() =>
                        console.log("url:" + URL.createObjectURL(file))
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="column" style={{ padding: 0 }}>
                <div className={styles.commentArea}>
                  <div className={styles.profileNameComment}>
                    <Avatar size={25} />
                    <p className={styles.userNameComment}>
                      {" "}
                      {user?.username
                        ? "@" + user.username
                        : "@Usuario_actual"}{" "}
                    </p>
                  </div>
                  <textarea
                    className={`textarea ${styles.comment}`}
                    placeholder="e.g. Hello world"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeModal()}
      ></button>
    </div>
  );
}
