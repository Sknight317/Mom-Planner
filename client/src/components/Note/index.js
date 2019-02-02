import React from "react";
// import "./style.css";

function Note(props) {
    return (
    <div className={"note" + this.props.color}>
    <p className="words">{this.props.text}</p>
    </div>
    );
  }
  
  export default Note;