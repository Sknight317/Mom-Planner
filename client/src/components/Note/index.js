import React from "react";
import "./style.css";


function Note({children}) {

    return (
        
    <div className="note">
    <p className="words">{children} </p>
    </div>
    )
  }
  
  export default Note;