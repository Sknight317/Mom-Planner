import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import ButtonAppBar from "../NavbarDashboard/Navbar";
import Button from "../Button/button";
import style from "./style.css"

// const divStyle = {
//   divContainer: {
//   backgroundImage: `url(${/images/note.jpg})`,
//   backgroundSize: 'cover'  
//   }
// };
class Landing extends Component {
  render() {
    return (
      
      <div classname="picture" id="picture">
       <ButtonAppBar />
        <div className="container" >
        
        <div className="row">
        
        
          <div className="col s12 center-align" id="words">

            <h4 className="text">
              Organize<b> All</b> of your to-do lists in one simple place!
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Organize your day. Organize your life.
            </p>
            <br />
            <div className="col  l12 center-align">
            <Button> <Link to="/register" />
                Register
            </Button >
            </div>
            {/* <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect white hoverable black-text"
              >
                Log In
              </Link>
            </div> */}
            
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Landing;