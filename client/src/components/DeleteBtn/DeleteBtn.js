import React from "react";
import "./DeleteBtn.css";
import DeleteIcon from '@material-ui/icons/Delete';
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <DeleteIcon className="delete-btn" {...props} role="button" tabIndex="0">
      
    </DeleteIcon>
  );
}

export default DeleteBtn;
