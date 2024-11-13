import { useState } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { editProfileLook } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function ConfigurationModal({ visible, setVisible }) {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  function closeModal() {
    setVisible("none");
  }

  function closeSession(e) {
    e.preventDefault();
  
    logOut();
    closeModal();
    navigate("/login");
  }

  return (
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content editModal">
        <div className="editTitle">
          <h2 className="title is-4">Configuration</h2>
        </div>

          <div className="modal-buttons">

            <button
                type="button"
                id="save-button"
                className="button save"
                onClick={closeSession}
              >Log out</button>

            <button
                type="button"
                id="save-button"
                className="button save"
                onClick={closeModal}
              >Close</button>

            </div>

      </div>
    </div>
  );
}
