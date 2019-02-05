import axios from "axios";

export default {
  // Gets all books
  getTodos: function() {
    return axios.get("/api/todo");
  },
  // Gets the book with the given id
  getTodo: function(id) {
    return axios.get("/api/todo/" + id);
  },
  // Deletes the book with the given id
  deleteTodo: function(id) {
    return axios.delete("/api/todo/" + id);
  },
  // Saves a book to the database
  saveTodo: function(bookData) {
    return axios.post("/api/todo", bookData);
  }
};