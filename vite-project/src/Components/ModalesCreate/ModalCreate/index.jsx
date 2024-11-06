import { useEffect, useState } from "react";
import foto from "../../../assets/create.png";
import { ModalPreview } from "../ModalPreview";
import "./Modal.css";

export function ModalCreate({
  onFilesSelected,
  visible,
  setVisible,
  setSiguiente,
}) {
  const [files, setFiles] = useState([]);

  function closeModal() {
    setVisible("none");
  }
  function cancel() {
    setVisible("none");
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
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-header">
            <h1 className="title is-6"> Crear nueva publicacion </h1>
          </div>
          <div
            className={`card-content ${
              files.length > 0 ? "upload-box active" : "upload-box"
            }`}
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
          >
            <img src={foto} className="createFoto" alt="create foto" />
            <p>Arrastra las fotos y los videos aqui</p>
            {/* <DragNdrop onFilesSelected={setFiles} width="300px" height="50px" /> */}
            <input
              type="file"
              hidden
              id="browse"
              onChange={handleFileChange}
              accept=".jpg,.png,.jpeg"
              multiple
            />
            <label htmlFor="browse" className="button subirFoto is-danger">
              Seleccionar del ordenador
            </label>
            <div className="previewList">
              {files.length > 0 && (
                <div>
                  {files.map((file, index) => (
                    <div className="previewItem" key={index}>
                      <p className="itemName">{file.name}</p>
                      <div className="">
                        <button
                          className="button previewButton is-danger is-outlined is-rounded"
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
                className="button botonSiguiente is-link is-rounded"
                onClick={() => openModalPreview()}
              >
                {" "}
                siguiente ➜{" "}
              </button>
            )}
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={cancel}
      ></button>
    </div>
  );
}
