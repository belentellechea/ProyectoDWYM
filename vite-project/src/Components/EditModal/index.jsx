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

  const [formData, setFormData] = useState(user);
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  // async function postChanges() {
  //     try {
  //       const response = await fetch(`http://localhost:3001/api/profile/edit`, {
  //         method: "PUT",
  //         headers: {
  //           'Authorization': `Bearer ${formData.token}`
  //         },
  //         body: {
  //             "username": formData.username,
  //             "profilePicture": formData.profilePicture
  //         }
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     }
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Ningún archivo seleccionado");
    }
  };

  function closeModal() {
    setVisible("none");
  }

  function updateProfile(e) {
    e.preventDefault();
    console.log("estoy en updateProfile");
    const newUser = {
      id: user._id,
      username: formData.name ? formData.name : user.username,
      description: user?.description,
      profilePicture: file.name,
      // friends: user?.friends,
      // posts: user?.posts,
    };
    console.log(user);
    console.log(newUser);
    console.log("estoy en updateProfile");
    editProfileLook(auth, user, newUser, updateUser);
  }

  return (
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content editModal">
        <div className="editTitle">
          <h2 className="title is-4">Edit profile</h2>
        </div>

        <form id="taskForm" onSubmit={(e) => e.preventDefault()}>
          <div className="field loginLabel">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="user"
                defaultValue={user?.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field loginLabel">
            <label className="label">Profile picture</label>
            <div className="file is-normal has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose a file...</span>
                </span>
                <span className="file-name">{fileName}</span>
              </label>
            </div>
          </div>
          <div className="modal-buttons">
            <button
              type="button"
              id="cancel-button"
              onClick={closeModal}
              className="button"
            >
              Cancelar
            </button>
            <button
              type="button"
              id="save-button"
              className="button save"
              onClick={updateProfile}
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
