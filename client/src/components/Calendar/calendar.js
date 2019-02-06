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
import "./style.css";
import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import moment from 'moment';
import Navbar from "../../components/Navbar";
class Calendar extends Component {
      state = {
      grocerynotes: [],
      selectValue: "",
      text: "",
      appointmentnotes: [],
      message: "",
      show: false,
      showMenu: false,
      appendedGrocery: false,
      appendedAppointment: false,
      appointmentnotecolor: ['#F8C5DO'],
      todoNotecolor: ['#F6E7A3'], 
      grocerynoteColor: ['#ABE3E5'],
      //  '#F988B7', '#76D7D6'],
      selectedColor: '',
    };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    
  };
componentDidMount() {
    this.loadTodos();
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  
}
showModal = () => {
    this.setState({ show: true });
    
};

hideModal = () => {
    this.setState({ show: false });
    // const box = document.getElementById("user-message");
    // box.Text = ""
};

addNewNote = event => {
event.preventDefault()
alert("add button clicked");
// this.getRandomColor()
if(this.state.selectValue && this.state.text) {
 API.saveTodo({
    name: this.state.selectValue,
    todoText: this.state.text,
  })
    .then(res => this.loadTodos())
    .catch(err => console.log(err));
    this.hideModal();
    this.setState({appendedGrocery: true})
}

// const e = document.getElementById("pick");
// const Modname = e.options[e.selectedIndex].value;
// console.log("value: " + Modname);
// // this.setState({selectValue: this.state.selectValue});
// console.log("state type: " +this.state.selectValue)
// const tbox = document.getElementById("user-message").value;

// console.log("value text: " + tbox);
// // this.setState({text: this.state.text});
// console.log("state text: " +this.state.text)
// if(Modname === "Groceries") {
//  this.hideModal();
//   this.setState({appendedGrocery: true});
 
// // this.setState({grocerynotes: {selectValue: this.state.selectValue, text: this.state.text}});
// // console.log("array-state: " + JSON.stringify(this.state.grocerynotes))  

// } if (Modname === "Appointments") {
// const newappointments = this.state.appointmentnotes;
// newappointments.push({title: this.state.title});
// this.setState({appointmentnotes: newappointments});  
// this.addtoAppointments()
// } if (this.state.Modname === 3) {
//   this.addtoTodo()
// }

}

// getRandomColor(){
//   const bgColor = this.state.bgColor;
//   const item = bgColor[Math.floor(Math.random()*bgColor.length)];
//   this.setState({
//     selectedColor: item,
//   })
//   console.log("color: " + this.state.selectedColor);
// }


handleChange = (e)=>{
  this.setState({ selectValue:e.target.value});
}

addtoGroceries =() => {
  
}

loadTodos= ()=> {
  API.getTodos()
      .then(res => {
        console.log(res)
      this.setState({ grocerynotes: res.data, selectValue:res.data.name, text: res.data.todoText })
      })
      .catch(err => console.log(err));
}

// Deletes a note from the database with a given id then reloads the note from the db
deleteTodo = id => {
  API.deleteTodo(id)
    .then(res => this.loadTodos())
    .catch(err => console.log(err));
};

editTodo = id => {
  this.setState({show: true})
  API.getTodo(id)({
    name: this.state.selectValue,
    todoText: this.state.text,
  }).then(res => this.updateTodos())
  .catch(err => console.log(err));
}
updateTodo = id => {
  this.setState({show: true})
  API.saveTodo(id)({
    name: this.state.selectValue,
    todoText: this.state.text,
  }).then(res => this.loadTodos())
  .catch(err => console.log(err));
}
addtoAppointments =() => {
  console.log("added to appointments!!");
  this.hideModal();
  this.setState({appendedAppointment: true});
  API.saveTodo({
    title: this.state.title,
    // todoText: this.state.text
  })
  .catch(err => console.log(err));
}

addtoTodo =()=>{
  alert("added to To do!!")
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

// handleTextChange = (id)=> {
//   var data = {
//     todoText: this.state.text,
//     selectValue: this.state.selectValue
//   };
//   API.saveTodo(data,id)({
//     name: this.state.selectValue,
//     todoText: this.state.text,
//   }).then(res => this.loadTodos())
//   .catch(err => console.log(err));
// }

handleTextChange(e) {
  if(e.keyCode != 13) return;
  if(e.target.value == '') return;
  if(e.target.value == '\n') {
    e.target.value = '';
    return;
  }
}
render() {
    const show = this.state.show;
    if (show) {
      
    }
    const appendedGrocery = this.state.appendedGrocery;
    const appendedAppointment = this.state.appendedAppointment;
    const { user } = this.props.auth;
    const message='You selected '+this.state.selectValue + '.';
  
return (
  
 
  <div>  
  <Navbar/>
      
      
        <div className="row">
          <div className="col s12 m12 l12 center-align">
          
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
      
      <Modal show={this.state.show} handleClose={this.hideModal}>
      {/* <div class="input-field col s12"> */}
      
    <select id="pick" value={this.state.selectValue} onChange={this.handleInputChange} name="selectValue"
    >
     
      <option value="" disabled selected>Choose your option</option>
      <option value="Groceries">Groceries</option>
      <option value="ToDo">To Do</option>
      <option value="Appointments">Appointments</option>
    </select>
    <p>{message}</p>
  
    {/* <div> */}
          <label data-error="wrong" data-success="right" for="form8">Your Note</label>
          <textarea value={this.state.text} name="text" onChange={this.handleInputChange}  rows="4" id="user-message"class="form-control" placeholder="Enter your Message"></textarea>
          
    {/* </div> */}
    <AddNewNote className="waves-effect waves-light btn" 
    disabled={!(this.state.text && this.state.selectValue)} onClick={this.addNewNote}>
    </AddNewNote >
    {/* <label>Materialize Select</label> */}
  {/* </div> */}
      </Modal>
      <div className="row">
      <h3>My Notes</h3>
          <div className="col s4 m8 l9 grocery"> 
        
      {appendedGrocery ?(
        
         <div>
          <h2>My Groceries</h2> 
         {this.state.grocerynotes.map(note => {
           const date = note.CreatedAt;
           const newDate = date.slice(0,10);
           const niceDate =moment(newDate).format("dddd, MMMM M, YYYY");
      return (
      <List>
        
          
        <Note key={note._id}
        style={{}}>
        
        <p className="text-title">{note.name }</p>
        <p className="text">{note.todoText}</p>
        <p className="text">Created: {niceDate}</p>
        <DeleteBtn onClick={() => this.deleteTodo(note._id)} />
        <UpdateBtn onclick={() => this.editTodo(note._id)} />
        </Note>
       
        </List>
      
       
      )
    })}
     </div>
      ) : (
       <h3> No Groceries to Display</h3>
     )}
  </div>
  </div>

       <div className="row">
          <div className="col s4 m8 l9 appointments"> 
      {appendedAppointment ?(
         <div>
          <h2>My Appointments</h2> 
         {this.state.appointmentnotes.map(appointment => {
      return (
      <List>
        
          
        <Note key={appointment.id}
        style={{backgroundColor: this.state.selectedColor}}>
        <p>{appointment.selectValue}</p>
        <p onKeyUp={this.handleTextChange.bind(this)}>{appointment.text}</p>
        </Note>
        
        </List>
      
       
      );
    })};
     </div>
      ) : (
       <h3> No appointments to Display</h3>
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