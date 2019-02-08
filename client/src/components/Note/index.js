import React from "react";
import DeleteBtn from "../DeleteBtn"
import UpdateBtn from "../UpdateBtn"
import "./style.css";

function Note({children, props}) {

    return (
        
    <div className="note" {...props}>
    <p className="words">{children} </p>
    <div className="center">
    <DeleteBtn  />
    <UpdateBtn  />
    </div>
    </div>
    )
  }
  
  export default Note;