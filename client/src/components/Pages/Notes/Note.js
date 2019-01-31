// import React from "react";
// import List from "../../ShoppingList/List";
// import ListItem from "../../ShoppingList/ListItem";
// import Modal from "../../Modal";
// import ShowmodalBtn from "../../ShowmodalBtn";

// class Note extends Component {
//     state = {
//       notes: [],
//       text: "",
//       show: false

//   };

// showModal = () => {
//     this.setState({ show: true });
// };

// hideModal = () => {
//     this.setState({ show: false });
// };

// addNewNote = event => {
// event.preventdefault();
// alert("add button clicked")
// }

 
// export function Note({ children }) {
//       return (
//       <div className="container valign-wrapper">
//       <Modal show={this.state.show} handleClose={this.hideModal}>
//       <p>Modal</p>
//       <p>Data</p>
//       </Modal>
//         <h3>My Notes</h3>
//       {this.state.notes.length ? (
//        <List>
//          {this.state.notes.map(note => {
//       return (
//       <ListItem key={note.id}>
//         <ShowmodalBtn onClick={this.showModal}>
//         Add a Note
//         </ShowmodalBtn>
//         </ListItem>
      
       
//       );
//      })} 
//      </List>
//      ) : (
//        <h3> No Notes to Display</h3>
//      )}
//   </div>
//       );
//     }

