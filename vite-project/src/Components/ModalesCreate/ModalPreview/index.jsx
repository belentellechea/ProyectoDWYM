import "./style.css";
import { useState, useEffect } from "react";
import { Avatar } from "antd";

export function ModalPreview({ siguiente, setSiguiente, files }) {
  function closeModal() {
    setSiguiente("none");
  }

  function compartir() {
    closeModal();
  }

  return (
    <div className="modal" style={{ display: siguiente }}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card preview">
          <div className="card-header preview">
            <button className="button atras"> ← </button>
            <h1 className="title is-6 preview"> Crear nueva publicacion </h1>
            <button
              className="button is-link is-inverted compartir"
              onClick={() => compartir()}
            >
              {" "}
              Compartir
            </button>
          </div>
          <div className="card-content preview">
            <div className="columns is-mobile">
              <div className="column" style={{ overflow: "hidden" }}>
                {files.map((file) => (
                  <div style={{ marginTop: "0.8rem", overflow: "hidden" }}>
                    <img
                      className="uploadedPhoto"
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))}
              </div>
              <div className="column">
                <div className="commentArea help">
                  <div className="profileNameComment">
                    <Avatar size={25} />
                    <p className="userNameComment"> @Usuario_actual </p>
                  </div>
                  <textarea
                    className="textarea comment"
                    placeholder="e.g. Hello world"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
}
