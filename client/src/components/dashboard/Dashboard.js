import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../../components/Navbar";
import Slider from "../slider/index";
import LogoutBtn from "../Logoutbtn";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div>
  <Navbar />
      <div className="container valign-wrapper">
      
        <div className="row">
          <div className="col l12 center-align">
          
            <h4>
              <b>Hey,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to Mom Planner!
              </p>
            </h4>
            <LogoutBtn
              onClick={this.onLogoutClick}
              // className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </LogoutBtn>
          </div>
          
          </div>
            
       
          
      </div>
      <div className="container valign-wrapper">
       <Slider />
      </div>
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
