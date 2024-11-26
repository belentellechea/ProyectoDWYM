import { useState } from "react";
import style from "./Styles.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { editProfileLook } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { EditOutlined, UserOutlined } from "@ant-design/icons";

export function EditModal({ setVisibleEdit }) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const [formData, setFormData] = useState({
    username: user?.username,
    profilePicture: user?.profilePicture,
    description: user?.description,
  });

  function closeModal() {
    setVisibleEdit(false);
  }

  function updateProfile(e) {
    e.preventDefault();

    const newLook = {
      username: formData.username ? formData.username : user.username,
      description: formData.description,
      profilePicture: formData.profilePicture
    };

    console.log("newLook: ", newLook);

    editProfileLook(auth, user, newLook, updateUser);
    closeModal();
  }
  
  

  return (
    <div className={style.modal}>
      <div className={style.editModal}>
        <h2 className="title is-4">Edit profile</h2>
        <form id="taskForm" onSubmit={updateProfile}>
          <div className={style.loginLabel}>
            <label className="label">Username</label>
            <div className="control">
              <input
                type="text"
                id="user"
                name="username"
                defaultValue={user?.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className={style.loginLabel}>
            <label className="label"> Profile picture (link)</label>
            <div className="control">
              <input
                type="text"
                id="picture"
                name="profilePicture"
                defaultValue={user?.profilePicture}
                onChange={(e) =>
                  setFormData({ ...formData, profilePicture: e.target.value })
                }
              />
            </div>
          </div>
          <div className={style.loginLabel}>
            <label className="label">Description</label>
            <div>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={user?.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className={style.modalButtons}>
            <button
              type="button"
              id="cancel-button"
              onClick={closeModal}
              className={style.cancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              id="save-button"
              className={style.save}
              onClick={updateProfile}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
