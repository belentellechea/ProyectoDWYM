import { useEffect, useState } from "react";
import foto from "../../../assets/create.png";
import { ModalPreview } from "../ModalPreview";
import styles from "./Modal.module.css";

export function ModalCreate({ onFilesSelected, setVisible, setSiguiente }) {
  const [files, setFiles] = useState([]);

  function closeModal() {
    setVisible(false);
  }
  function cancel() {
    setVisible(false);
    setFiles([]);
  }

  function openModalPreview() {
    setSiguiente("block");
    closeModal();
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

  return (
    <div className={styles.modal}>
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
          <div className="previewList">
            {files.length > 0 && (
              <div>
                {files.map((file, index) => (
                  <div className={styles.previewItem} key={index}>
                    <p className={styles.itemName}>{file.name}</p>
                    <div className="">
                      <button
                        className={`button ${styles.previewButton} is-danger is-outlined is-rounded`}
                        onClick={() => handleRemoveFile(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {files.length > 0 && (
            <button
              className={`button ${styles.botonSiguiente} is-link is-rounded`}
              onClick={() => openModalPreview()}
            >
              {" "}
              siguiente ➜{" "}
            </button>
          )}
          <button className={styles.botonCancelar} onClick={cancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
