import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ShowPlacesBtn(props) {
  return (
    <button className="delete-btn" {...props}  tabIndex="0">
      Search for a place
    </button>
  );
}

export default ShowPlacesBtn;
