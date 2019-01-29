import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
        <nav>
        <div class="nav-wrapper">
          <Link to="/dashboard" class="brand-logo">Mom Planner</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/important">Important Info</Link></li>
            <li><Link to="/connect">Connect</Link></li>
            <li><Link to="/">Goal Tracker</Link></li>
          </ul>
        </div>
      </nav>
        
    );
  }
}
export default Navbar;