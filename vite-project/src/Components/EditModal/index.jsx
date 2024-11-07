import { useState } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function EditModal({ visible, setVisible, userData }) {
  const [formData, setFormData] = useState(userData);
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  async function postChanges() {
    try {
      const response = await fetch(`http://localhost:3001/api/profile/edit`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${formData.token}`,
        },
        body: {
          username: formData.username,
          profilePicture: formData.profilePicture,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

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

  return (
    <div className="modal editModal" style={{ display: visible }}>
      <div className="modal-content editModal">
        <h2>Edit profile</h2>
        <form id="taskForm">
          <div className="field loginLabel">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                id="user"
                defaultValue={formData?.username}
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
              className="button is-danger"
            >
              Cancelar
            </button>
            <button
              type="submit"
              id="save-button"
              className="button is-danger"
              onClick={postChanges}
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
