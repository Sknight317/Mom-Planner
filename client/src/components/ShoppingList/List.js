import React from "react";
import "./List.css";

export function List({ children }) {
  return (
    <div className="container valign-wrapper">  
      <ul className="list-group">{children}</ul>
    </div>
  );
}
