import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbarlogin from "../layout/NavbarLogin";
import { List, ListItem } from "../ShoppingList/index";
import Modal from "../Modal";
import ShowmodalBtn from "../ShowmodalBtn";
import M from 'materialize-css';  

class Calendar extends Component {
      state = {
      notes: [],
      text: "",
      show: false,
      showMenu: false
    };
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

componentDidMount() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
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
            
          </div> 
      
      <Modal show={this.state.show} handleClose={this.hideModal}>
      <div class="input-field col s12">
      
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
      </Modal>
      <div className="row">
          <div className="col s12 center-align">
        <h3>My Notes</h3>
        </div>
        </div>
        <div className="row">
          <div className="col s12 center-align"> 
      {this.state.notes.length ? (
       <List>
         {this.state.notes.map(note => {
      return (
      <ListItem key={note.id}>
        
        </ListItem>
      
       
      );
     })} 
     </List>
     ) : (
       <h3> No Notes to Display</h3>
     )}
  </div>
  </div>
      <div className="row">
        <div className="col s12 center-align">
        <ShowmodalBtn className="waves-effect waves-light btn" onClick={this.showModal}>
        Add a Note
        </ShowmodalBtn>
        </div>
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