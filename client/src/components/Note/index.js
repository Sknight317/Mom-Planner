import React from "react";
import "./style.css";


function Note(props) {

    return (
        
    <div className="note" {...props} >
    <p className="words">This is a note.</p>
    </div>
    )
  }
  
  export default Note;