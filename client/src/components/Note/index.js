import React from "react";
import "./style.css";


function Note({children, props}) {

    return (
        
    <div className="note" {...props}>
    <p className="words">{children} </p>
    </div>
    )
  }
  
  export default Note;