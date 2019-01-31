import React from "react";

export function ListItem({ children }) {
  return (
    <div className={'add-note ' + this.props.color}>
      <textarea type='text' placeholder='Your new note...' onKeyUp={this.handleTextChange.bind(this)} />
    </div>  
  );
}
