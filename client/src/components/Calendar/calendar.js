import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbarlogin from "../layout/NavbarLogin";
// import { List, ListItem } from "../ShoppingList/index";
import Modal from "../Modal";
// import ShowmodalBtn from "../ShowmodalBtn";
import M from 'materialize-css';  
import AddNewNote from "../../components/AddNewNote";
import Note from "../../components/Note";
import API from "../utils/API";
import "./style.css";
// import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
// import UpdateBtn from "../../components/UpdateBtn";
import moment from 'moment';
import Navbar from "../../components/Navbar";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import LogoutBtn from "../Logoutbtn";
// import AddBtn from "../AddBtn";
class Calendar extends Component {
      state = {
      grocerynotes: [],
      events: [],
      selectValue: "",
      todotext: "",
      message: "",
      show: false,
      showMenu: false,
      appendedGrocery: false,
     
       
   
    };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    
  };
componentDidMount() {
    this.loadTodos();
    this.loadEvents();
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);  
}

showModal = () => {
    this.setState({ show: true });    
};

hideModal = () => {
    this.setState({ show: false });
    // // document.getElementById('pick').value();
    // document.getElementById('user-message').reset();
};

addNewNote = event => {
event.preventDefault()
// alert("add button clicked");
if(this.state.selectValue && this.state.todotext) {
 API.saveTodo({
    name: this.state.selectValue,
    todoText: this.state.todotext,
  })
    .then(res => console.log(res), this.loadTodos(), this.notify())
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

  // getColors = () => {
  // let colorValues = ['#F988B7', '#76D7D6', '#ABE3E5', '#F6E7A3','#F8C5DO'];
  // var notes = document.querySelectorAll(".box");

  // for(let i=0; i < notes.length; i++){
  //   notes[i].style.backgroundColor = colorValues[Math.floor(Math.random() * colorValues.length)];
  // }  
  // }

handleChange = (e)=>{
  this.setState({ selectValue:e.target.value});
}

loadTodos= ()=> {
  API.getTodos()
      .then(res => {
        console.log(res)
      this.setState({ grocerynotes: res.data})
      })
      .catch(err => console.log(err));
      // this.getColors();
}

loadEvents =()=> {
  API.getEvents()
    .then(res => {
    console.log(res)
    this.setState({events: res.data})
})
.catch(err => console.log(err));
}
// Deletes a note from the database with a given id then reloads the note from the db
deleteTodo = id => {
  API.deleteTodo(id)
    .then(res => this.loadTodos(),
    this.notify2())
    .catch(err => console.log(err));
};

deleteEvent = id => {
  API.deleteEvent(id)
    .then(res => this.loadEvents(),
    this.notify3())
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

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

// getcolor = ()=> {
//       let colorValues = ['#F988B7', '#76D7D6', '#ABE3E5', '#F6E7A3','#F8C5DO'];
//       let newcolor = colorValues[Math.floor(Math.random() * colorValues.length)];
//       return newcolor
//     }

    notify = () => {
      toast("Success: Note Added!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      className: css({
        background: 'green'
      }),
      bodyClassName: css({
        fontSize: '20px'
      }),
      progressClassName: css({
        background: "repeating-radial-gradient(circle at center, white, green 30px)"
      })
      })
    }
    notify2 = () => {
      toast("Success: Note Deleted!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      className: css({
        background: 'green'
      }),
      bodyClassName: css({
        fontSize: '20px'
      }),
      progressClassName: css({
        background: "repeating-radial-gradient(circle at center, white, green 30px)"
      })
      })
    }

    notify3 = () => {
      toast("Success: Event Deleted!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      className: css({
        background: 'green'
      }),
      bodyClassName: css({
        fontSize: '20px'
      }),
      progressClassName: css({
        background: "repeating-radial-gradient(circle at center, white, green 30px)"
      })
      })
    }
render() {
    const show = this.state.show;
    const { user } = this.props.auth;
    const message='You selected '+this.state.selectValue + '.';
    const number  = this.state.grocerynotes.length;
    const number2 = this.state.events.length;
  
return (
  
  <div className="container l12" id="background">  
  <Navbar/>
      <ToastContainer/>
      
        <div className="row" id="board2">
          <div className="col l12" >
          
          <h4 className="heading2">
              <p id="name-calendar" className="white2"><b>Hey, {user.name.split(" ")[0]} !</b></p>
              <p className="white2">
                Stay organized and plan out your week! Click the add a new note button to get started. You have <b> {number} </b> notes and <b>{number2}</b> events!
              </p>
            </h4>
            <LogoutBtn
              onClick={this.onLogoutClick}
              // className="waves-effect waves-light btn"
            >
              Logout
            </LogoutBtn>
            <LogoutBtn  onClick={this.showModal}>
            Add a Note
            </LogoutBtn>
          </div>
          
          </div> 
      
      <Modal className="modal" show={this.state.show} handleClose={this.hideModal}>
      {/* <div class="input-field col s12"> */}
      <form>
    <select type='reset' id="pick" value={this.state.selectValue} onChange={this.handleInputChange} name="selectValue"
    >
     
      <option value="" disabled selected>Choose a note type</option>
      <option value="Groceries">Groceries</option>
      <option value="To Do">To Do</option>
      <option value="Appointments">Appointments</option>
    </select>
    <p>{message}</p>
  
    {/* <div> */}
          <label data-error="wrong" data-success="right" for="form8">Your Note</label>
          <textarea type='reset' value={this.state.todotext} name="todotext" onChange={this.handleInputChange}  rows="4" id="user-message"class="form-control" placeholder="Enter your Message"></textarea>
          
    {/* </div> */}
    <AddNewNote className="waves-effect waves-light btn" 
    disabled={!(this.state.todotext && this.state.selectValue)} onClick={this.addNewNote}>
    </AddNewNote >
    {/* <label>Materialize Select</label> */}
  {/* </div> */}
  </form>
      </Modal>
      <div className="row">
      
          <div className="col s12 m12 l12 grocery align-center"></div>
        
      {this.state.grocerynotes.length ? (
        
         <div className="col s6 m6 l6" id="left">
         <div className="note-box">
          <h4 className="notes" id="note-title">My Notes</h4>
          </div>
          
         {this.state.grocerynotes.map(note => {
           const date = note.CreatedAt;
           const newDate = date.slice(0,11);
           const year = newDate.slice(0,4);
           const month = newDate.slice(5,7);
           const day = newDate.slice(8,10);
          //  console.log(year)
           const daten = month + "/"+day+"/" +year;
           console.log(daten);
           const niceDate =moment(daten).format(" MMM Do, YYYY");
           
      return (
       
      // <List>
        
      //     <ListItem>
        <Note key={note._id}
        className="box"
        >
        
        <p className="text-title">{note.name }</p>
        <p className="text">{note.todoText}</p>
        <p className="text">Created: {niceDate}</p>
        <div className="row">
        <div className="col s4 m8 l9 center">
        <DeleteBtn style={{margin: '0 auto'}} onClick={() => this.deleteTodo(note._id)} />
        {/* <UpdateBtn onclick={() => this.editTodo(note._id)} /> */}
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

   {this.state.events.length ? (
  <div className="col s6 m6 l6" id="right">
    <div className="note-box">
    
          <h4 className="notes" id="event-title">My Saved Events</h4>
          </div>

         {this.state.events.map(items => {
            const city = items.city;
            const region = items.region;
            const location = city + ", "+ region; 
          //   const date = items.start;
          //   const month = date.slice(5,7);
          //   const year = date.slice(0,4);
          //   const day = date.slice(8,11);
          //   const newday = month + "/" + day + "/" + year;
          //  const niceDate =moment(newday).format("dddd, MMM Do");
           return (
            <div className="col s12 m6 l3" id="column">  
            <div class="card" key={items._id} >
            <div class="card-image waves-effect waves-block waves-light">
            {items.imageUrl ? <img class="activator" id="image" src={items.imageUrl} alt="hello"/> : <div id="img-div2"/>}
               {/* <Thumbnail src={thumbnail} /> */}
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">{items.title}<i class="material-icons right">expand_more</i></span>
                    <p className="item">{items.place} </p>
                    <p className="item">{items.address}</p>
                    <p className="item">{location}</p>
                    {/* <p>{niceDate}</p> */}
                    {/* <button onClick={() => this.add(items.id)}/> */}
                    {/* <a class="btn-floating halfway-fab waves-effect waves-light red" onClick={this.add}><i class="material-icons">add</i></a> */}
              <p><a rel="noreferrer noopener" target="_blank" href={items.url} style={{textDecoration:'underline', color: '#413639'}}>Read more.</a></p>
              <div id="delete">
              <DeleteBtn style={{margin: '0 auto'}} onClick={() => this.deleteEvent(items._id)} />
              </div>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
              <p>{items.description}</p>
            </div>
            </div>
             </div>
              
                )
              })}
             </div>
               
                ) : (
                 <h3 className="notes"> No Events Yet. </h3>
               )}
    
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