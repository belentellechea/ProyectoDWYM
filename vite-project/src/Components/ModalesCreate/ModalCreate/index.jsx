import { useEffect, useState } from "react";
import foto from "../../../assets/create.png";
import { ModalPreview } from "../ModalPreview";
import styles from "./Modal.module.css";

export function ModalCreate({
  onFilesSelected,
  visible,
  setVisible,
  setSiguiente,
}) {
  const [files, setFiles] = useState([]);

  function cancel() {
    setVisible("none");
    setFiles([]);
  }

  function openModalPreview() {
    setVisible("none");
    setSiguiente("block");
  }

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    Array.from(droppedFiles).forEach((file) => {
      console.log(file.name);
    });

    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  useEffect(() => {
    if (files.length > 0) {
      openModalPreview();
    }
  }, [files]);

  return (
    <div className={styles.modal} style={{ display: visible }}>
      <div className={styles.modalContent}>
        <h1 className={`title is-5 ${styles.title}`}>
          {" "}
          Crear nueva publicacion{" "}
        </h1>
        <div
          className={styles.divModal}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <img src={foto} className={styles.createFoto} alt="create foto" />
          <p className={styles.uploadText}>
            {" "}
            Arrastra las fotos y los videos aqui
          </p>
          {/* <DragNdrop onFilesSelected={setFiles} width="300px" height="50px" /> */}
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".jpg,.png,.jpeg"
            multiple
          />
          <label htmlFor="browse" className={styles.subirFoto}>
            Seleccionar del ordenador
          </label>
          <button className={styles.botonCancelar} onClick={() => cancel()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
