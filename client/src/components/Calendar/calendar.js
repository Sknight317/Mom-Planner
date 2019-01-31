import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbarlogin from "../layout/NavbarLogin";
import { List, ListItem } from "../ShoppingList/index";
import Modal from "../Modal";
import ShowmodalBtn from "../ShowmodalBtn";

class Calendar extends Component {
      state = {
      notes: [],
      text: "",
      show: false};
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    
  };

showModal = () => {
    this.setState({ show: true });
};

hideModal = () => {
    this.setState({ show: false });
};

addNewNote = event => {
event.preventdefault();
alert("add button clicked")
}

render() {
    const { user } = this.props.auth;
return (
  <div className="container">
  <Navbarlogin />
  <div className="container valign-wrapper">  
 
      
      
        <div className="row">
          <div className="col l12 center-align">
          
          <h4>
              <b>Hey,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Plan your week!
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
          
          </div>
            
          return (
      <div className="container valign-wrapper">
      <Modal show={this.state.show} handleClose={this.hideModal}>
      <p>Modal</p>
      <p>Data</p>
      </Modal>
        <h3>My Notes</h3>
      {this.state.notes.length ? (
       <List>
         {this.state.notes.map(note => {
      return (
      <ListItem key={note.id}>
        <ShowmodalBtn onClick={this.showModal}>
        Add a Note
        </ShowmodalBtn>
        </ListItem>
      
       
      );
     })} 
     </List>
     ) : (
       <h3> No Notes to Display</h3>
     )}
  </div>
      );
          
      </div>
      
      </div>
    );
  }
}
Calendar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Calendar);