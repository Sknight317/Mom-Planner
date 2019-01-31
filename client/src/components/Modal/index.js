import React from "react";
import "./modal.css";

export function Modal({ handleClose, show, children}) {
    const showHideClassname = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
        <div class="modal-header">
 
      <button onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

      <h4 class="modal-title" id="myModalLabel">Custom sized Modal</h4>

    </div>  
        {/* <span class="closeBtn" onClick={handleClose}>&times;</span> */}

        {children}
          {/* <button onClick={handleClose}>close</button> */}
        </section>
      </div>
    );
  };
  export default Modal;