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
      <div className="container valign-wrapper" id="dashboard">
      
        <div className="row">
          <div className="col s12 m12 l12 center-align">
          
            <h4 className="heading">
              <p><b>Hey,</b> {user.name.split(" ")[0]} !!</p>
              <p className="flow-text grey-text text-darken-1">
                Welcome to Note-Plan it!
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
      <div className="row">
          <div className="col s12 m12 l12 center-align">
          
          </div>
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
