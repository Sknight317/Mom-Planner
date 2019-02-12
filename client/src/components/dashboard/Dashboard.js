import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../../components/Navbar";
import Slider from "../slider/index";
import LogoutBtn from "../Logoutbtn";
import style from "./style.css";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  
      <div className="container l12" id="dashboard">
      <Navbar />
        <div className="row" id="board">
          <div className="col s8 m8 l8 center-align" >
                
            <h4 className="heading" >
              <p className="white" id="name-top"><b>Hey, {user.name.split(" ")[0]} !</b></p>
              <p className="white">
                Welcome to Note-Plan it! Here you can stay organized by creating your own
                personal to-do board. You can can create and add your own to-do notes to your board,
                with several to-do categories to choose from.  
              </p>
              <p  className="white">
              You can also search for events in your area and add any event you want to your personal board.
              </p>
               <p className="white" >
              To get started, simply click on the navigation menu to the left.
              </p>
            </h4>
            <LogoutBtn
              onClick={this.onLogoutClick}
              // className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </LogoutBtn>
            </div>
            <div className="col s4 m4 l4" id="picture-dash">
            
            </div>
          </div>
          {/* <div className="row">
          <div className="col s8 m8 l8 center-align" id="board">
         
          </div>
          </div> */}
            
       
          
      </div>
   
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
