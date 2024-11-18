import { useEffect, useState } from "react";
import foto from "../../../assets/create.png";
import { ModalPreview } from "../ModalPreview";
import styles from "./Modal.module.css";

export function ModalCreate({ setFiles, setVisibleModalCreate, setSiguiente }) {
  const [thisFiles, setThisFiles] = useState([]);

  function cancel() {
    setVisibleModalCreate(false);
    setSiguiente(false);
    setThisFiles([]);
  }

  function openModalPreview() {
    setVisibleModalCreate(false);
    setSiguiente(true);
  }

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles?.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setThisFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    Array.from(droppedFiles).forEach((file) => {
      console.log(file.name);
    });

    if (droppedFiles?.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setThisFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  useEffect(() => {
    setFiles(thisFiles);
  }, [thisFiles, setFiles]);

  useEffect(() => {
    if (thisFiles?.length > 0) openModalPreview();
  }, [thisFiles]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1 className={`title is-5 ${styles.title}`}> Create new post </h1>
        <div
          className={styles.divModal}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <img src={foto} className={styles.createFoto} alt="create foto" />
          <p className={styles.uploadText}> Drag photos and videos here</p>
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".jpg,.png,.jpeg"
            multiple
          />
          <label htmlFor="browse" className={styles.subirFoto}>
            Select from computer
          </label>
          <button className={styles.botonCancelar} onClick={() => cancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
