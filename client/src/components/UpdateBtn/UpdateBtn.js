import React from "react";
import "./UpdateBtn.css";
import UpdateIcon from '@material-ui/icons/Update';
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateBtn(props) {
  return (
    <UpdateIcon className="update-btn" {...props} role="button" tabIndex="0">
      
    </UpdateIcon>
  );
}

export default UpdateBtn;
