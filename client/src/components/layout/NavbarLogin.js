import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';  

class Navbar extends Component {

  
  componentDidMount= ()=> {
   var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems); 
  }
 
  
  render() {
    return (
        <nav>
        <div class="nav-wrapper">
          <Link to="/dashboard" class="brand-logo">Mom Planner</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
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