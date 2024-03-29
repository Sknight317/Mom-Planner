import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ShowmodalBtn(props) {
  return (
    <button className="delete-btn" {...props}  tabIndex="0">
      Add a New Note
    </button>
  );
}

export default ShowmodalBtn;
