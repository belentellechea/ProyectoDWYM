import { useState } from "react";
import style from "./Styles.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { editProfileLook } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function ConfigurationModal({ setVisibleConfig }) {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  function closeModal() {
    setVisibleConfig(false);
  }

  function closeSession(e) {
    e.preventDefault();

    logOut();
    closeModal();
    navigate("/");
  }

  return (
    <div className={style.modal}>
      <div className={style.editModal}>
        <div className={style.editTitle}>
          <h2 className="title is-4">Settings</h2>
        </div>

        <div className={style.modalButtons}>
          <button
            type="button"
            id="save-button"
            className={style.cancel}
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            id="save-button"
            className={style.save}
            onClick={closeSession}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
