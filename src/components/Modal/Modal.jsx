import React from "react";
import "./Modal.scss";

function Modal({ title, body, onSave, onCancel, show }) {
  return (
    <>
      {show && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          onClick={onCancel}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {title}
                </h1>
              </div>
              <div className="modal-body">{body}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={onCancel}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSave}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
