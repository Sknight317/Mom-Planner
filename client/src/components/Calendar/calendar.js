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

  getColors = () => {
  let colorValues = ['#F988B7', '#76D7D6', '#ABE3E5', '#F6E7A3','#F8C5DO'];
  var notes = document.querySelectorAll(".box");

  for(let i=0; i < notes.length; i++){
    notes[i].style.backgroundColor = colorValues[Math.floor(Math.random() * colorValues.length)];
  }  
  }
 
 
 

handleChange = (e)=>{
  this.setState({ selectValue:e.target.value});
}

addtoGroceries =() => {
  
}

loadTodos= ()=> {
  API.getTodos()
      .then(res => {
        console.log(res)
      this.setState({ grocerynotes: res.data})
      })
      .catch(err => console.log(err));
      this.getColors();
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
getBackground(i) {
  const props = {
    key: i,
    background: `background ${this.getRandomColor()}`,
  }
  return (<Note {...props} />)
}
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
getcolor = ()=> {
      let colorValues = ['#F988B7', '#76D7D6', '#ABE3E5', '#F6E7A3','#F8C5DO'];
      let newcolor = colorValues[Math.floor(Math.random() * colorValues.length)];
      return newcolor
    }
render() {
    const show = this.state.show;
    if (show) {
      
    }
    // const appendedGrocery = this.state.appendedGrocery;
    const appendedAppointment = this.state.appendedAppointment;
    const { user } = this.props.auth;
    const message='You selected '+this.state.selectValue + '.';
    const number  = this.state.grocerynotes.length;
  
return (
  
 
  <div className="container l12" id="background">  
  <Navbar/>
      
      
        <div className="row">
          <div className="col s12 m12 l12 center-align">
          
          <h4 className="heading">
              Hey, {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1 ">
                Stay organized and plan out your week! Click the add a new note button to get started. You have {number} notes!
              </p>
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="waves-effect waves-light btn"
            >
              Logout
            </button>
            <ShowmodalBtn className="waves-effect waves-light btn" onClick={this.showModal}>
            Add a Note
            </ShowmodalBtn>
          </div>
          
          </div> 
      
      <Modal className="modal" show={this.state.show} handleClose={this.hideModal}>
      {/* <div class="input-field col s12"> */}
      
    <select id="pick" value={this.state.selectValue} onChange={this.handleInputChange} name="selectValue"
    >
     
      <option value="" disabled selected>Choose your option</option>
      <option value="Groceries">Groceries</option>
      <option value="To Do">To Do</option>
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
      
          <div className="col s12 m12 l12 grocery align-center"> 
        
      {this.state.grocerynotes.length ? (
        
         <div >
         <div className="note-box">
          <h4 className="notes">My Notes</h4>
          </div>
          
         {this.state.grocerynotes.map(note => {
           const date = note.CreatedAt;
           const newDate = date.slice(0,10);
           const year = newDate.slice(0,4);
           const month = newDate.slice(6,7);
           const day = newDate.slice(9,10);
          //  console.log(year)
           const daten = month + "/"+day+"/" +year;
           console.log(daten);
          //  const niceDate =moment(daten).format("dddd, MMMM M, YYYY");
           
      return (
       
      // <List>
        
      //     <ListItem>
        <Note key={note._id}
        className="box"
        style={this.getcolor()}>
        
        <p className="text-title">{note.name }</p>
        <p className="text">{note.todoText}</p>
        <p className="text">Created: {daten}</p>
        <div className="row">
        <div className="col s4 m8 l9 center">
        <DeleteBtn onClick={() => this.deleteTodo(note._id)} />
        <UpdateBtn onclick={() => this.editTodo(note._id)} />
        </div>
        </div>
        </Note>
      //  </ListItem>
      //   </List>
     
       
      )
    })}
     </div>
      ) : (
       <h3 className="notes"> No Notes Yet. </h3>
     )}
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