import { useState } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { editProfileLook } from "../../Services/userService";
import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { EditOutlined, UserOutlined } from "@ant-design/icons";

export function EditModal({ visible, setVisible, userData }) {
  const { auth, updateAuth } = useAuth();
  const { user, updateUser } = useUser();

  const [formData, setFormData] = useState({
    username: user?.username,
    profilePicture: user?.profilePicture,
    description: user?.description,
  });

  function closeModal() {
    setVisible("none");
  }

  function updateProfile(e) {
    e.preventDefault();

    const newLook = {
      username: formData.username ? formData.username : user.username,
      description: formData.description
        ? formData.description
        : user?.description,
      profilePicture: formData.profilePicture
        ? formData.profilePicture
        : user?.profilePicture,
    };

    console.log(user);
    console.log(newUser);
    console.log("estoy en updateProfile");
    editProfileLook(auth, user, newUser, updateUser);

    /* estaba en mi rama de julian    */
    console.log("formData", formData);
    console.log("username formdata: ", formData.username);
    console.log("description formdata: ", formData.description);
    console.log("picture formdata: ", formData.profilePicture);
    console.log("user: ", user);
    console.log("newUser: ", newLook);
    editProfileLook(auth, user, newLook, updateUser);
    closeModal();
  }

  return (
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content editModal">
        <div className="editTitle">
          <h2 className="title is-4">Edit profile</h2>
        </div>

        <form id="taskForm" onSubmit={updateProfile}>
          <div className="field loginLabel">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="user"
                name="username"
                defaultValue={user?.username}
                //value={formData?.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="field loginLabel">
            <label className="label">Profile picture (link)</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="picture"
                name="profilePicture"
                defaultValue={user?.profilePicture}
                //value={formData?.profilePicture}
                onChange={(e) =>
                  setFormData({ ...formData, profilePicture: e.target.value })
                }
              />
            </div>
          </div>
          <div className="field loginLabel">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="description"
                name="description"
                //value={formData?.description}
                defaultValue={user?.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-buttons">
            <button
              type="button"
              id="cancel-button"
              onClick={closeModal}
              className="button"
            >
              Cancel
            </button>

            <button
              type="submit"
              id="save-button"
              className="button save"
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
