import styles from "./ModalPreview.module.css";
import { useState } from "react";
import { Avatar } from "antd";
import { useUser } from "../../../Context/UserContext";
import { useAuth } from "../../../Context/AuthContext";
import { uploadPost } from "../../../Services/postService";
import { IoClose } from "react-icons/io5";
import image from "../../../assets/user.png";

export function ModalPreview({ setSiguiente, files, setFiles }) {
  const { user, addPost } = useUser();
  const { auth } = useAuth();

  const [caption, setCaption] = useState("");

  function closeModal() {
    setSiguiente(false);
    setFiles([]);
  }

  function compartir() {
    uploadPost(files[0], caption, addPost, auth);
    closeModal();
  }

  return (
    <div className={styles.modal}>
      <IoClose className={styles.closeModal} onClick={closeModal} />
      <div className={styles.preview}>
        <div className={styles.headerPreview}>
          <button className={styles.botonAtras}> ← </button>
          <h1 className={styles.titleCreate}> Create new post </h1>
          <button className={styles.compartir} onClick={() => compartir()}>
            {" "}
            Share
          </button>
        </div>
        <div className={styles.columns}>
          {files.map((file) => (
            <img
              className={styles.uploadedPhoto}
              src={URL.createObjectURL(file)}
              alt={file.name}
              onClick={() => console.log("url:" + URL.createObjectURL(file))}
            />
          ))}
          <div className={styles.column}>
            <div className={styles.commentArea}>
              <div className={styles.profileNameComment}>
                <Avatar size={25} src={user.profilePicture ? user.profilePicture : image}/>
                <p className={styles.userNameComment}>
                  {" "}
                  {user?.username
                    ? "@" + user.username
                    : "@Usuario_actual"}{" "}
                </p>
              </div>
              <textarea
                className={styles.comment}
                placeholder="Type something..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
