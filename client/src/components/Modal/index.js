import React from "react";
import "./modal.css";

export function Modal({ handleClose, show, children }) {
    const showHideClassname = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };