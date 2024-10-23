import "./Modal.css";
import foto from "../../assets/create.png";

export function Modal({ visible, setVisible }) {
  function closeModal() {
    setVisible("none");
  }
  return (
    <div className="modal" style={{ display: visible }}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-header">
            <h1 className="title is-6"> Crear nueva publicacion </h1>
          </div>
          <div className="card-content">
            <img src={foto} className="createFoto" alt="create foto" />
            <p>Arrastra las fotos y los videos aqui</p>
            <button className="button is-danger subirFoto">
              {" "}
              Seleccionar del ordenador{" "}
            </button>
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
