import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbarlogin from "../layout/NavbarLogin";
import { List, ListItem } from "../ShoppingList/index";
import Modal from "../Modal";
import ShowmodalBtn from "../ShowmodalBtn";
import M from 'materialize-css';  
import AddNewNote from "../../components/AddNewNote";
import Note from "../../components/Note";
import API from "../utils/API";

class Calendar extends Component {
      state = {
      grocerynotes: [],
      message: "",
      show: false,
      showMenu: false,
      appendedGrocery: false,
      text: "",
      title: ""
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

addNewNote = () => {
// event.preventdefault();

alert("add button clicked");
var e = document.getElementById("pick");
var Modname = e.options[e.selectedIndex].value;
console.log("value: " + Modname);
this.setState({title: Modname});
// this.setState({text: x});
const newgrocerynotes = this.state.grocerynotes
newgrocerynotes.push({title: this.state.title});
this.setState({grocerynotes: newgrocerynotes});
if(Modname === "Groceries") {
this.addtoGroceries()
} if (this.state.Modname === 2) {
this.addtoAppointments()
} if (this.state.Modname === 3) {
  this.addtoTodo()
}

}

handleChange = (e)=>{
  this.setState({selectValue:e.target.value});
}
addtoGroceries =() => {
  console.log("added to groceries!!");
  this.hideModal();
  this.setState({appendedGrocery: true});
  API.saveTodo({
    title: this.state.title,
    // todoText: this.state.text
  })
  
  .catch(err => console.log(err));
}

addtoAppointments =() => {
  alert("added to appointments!!")
}

addtoTodo =()=>{
  alert("added to To do!!")
}
componentDidMount() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
}
render() {
    const show = this.state.show;
    if (show) {
      
    }
    const appendedGrocery = this.state.appendedGrocery;
    const { user } = this.props.auth;
    const message='You selected '+this.state.selectValue + '.';
  //   if (appendedGrocery) {
  //     newNote = <Note/>
  // } 
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
      {/* <div class="input-field col s12"> */}
      
    <select id="pick" value={this.state.selectValue} onChange={this.handleChange} 
    >
     
      <option value="" disabled selected>Choose your option</option>
      <option value="Groceries">Groceries</option>
      <option value="To Do">To Do</option>
      <option value="Appointments">Appointments</option>
    </select>
    <p>{message}</p>
  
    {/* <div> */}
          <label data-error="wrong" data-success="right" for="form8">Your Note</label>
          <textarea value={this.state.text} rows="4" id="user-message"class="form-control" placeholder="Enter your Message"></textarea>
          
    {/* </div> */}
    <AddNewNote className="waves-effect waves-light btn" onClick={this.addNewNote}>
    </AddNewNote >
    {/* <label>Materialize Select</label> */}
  {/* </div> */}
      </Modal>
      <div className="row">
          <div className="col s12 center-align">
        <h3>My Notes</h3>
        </div>
        </div>
        <div className="row">
          <div className="col s12 center-align"> 
      {appendedGrocery ? (
         <div>
         {this.state.grocerynotes.map(note => {
      return (
      <List>
        <Note key={note.id}>
        <p>{note.title}</p>
        {/* <p>{note.text}</p> */}
        </Note>
        </List>
      
       
      );
    })};
     </div>
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
        <div id="appointments"></div>
        <div id="Groceries">
        <p appended="true">Hi, why isn't the h2 being appended here? {this.state.appendedH2}</p>
        
        </div>
        <div id="To-do"></div>
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