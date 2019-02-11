import axios from "axios";

export default {
  // Gets all todps
  getTodos: function() {
    return axios.get("/api/todo");
  },
  //Get all events
  getEvents: function() {
    return axios.get("/api/save-event");
  },
  // Gets the todo with the given id
  getTodo: function(id) {
    return axios.get("/api/todo/" + id);
  },
  // Deletes the todo with the given id
  deleteTodo: function(id) {
    return axios.delete("/api/todo/" + id);
  },
  // Saves a todo to the database
  saveTodo: function(bookData) {
    return axios.post("/api/todo", bookData);
  },
  // Saves an event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/save-event", eventData);
  },
   // Updates a todo to the database
   updateTodo: function(id) {
    return axios.put("/api/todo/" + id);
  },
};