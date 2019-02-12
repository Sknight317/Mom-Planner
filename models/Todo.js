const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
 const TodoSchema = new Schema({
  Userid: {
        type: mongoose.Schema.Types.ObjectId, //How we connect todos with specific user
        ref: "User"
    },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
  
  },
  todoText: {
    type: String,
    
  }
});

// This creates our model from the above schema, using mongoose's model method
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;

// const TodoSchema = new Schema({
//   name: {type: String, default : ''},
//   user: {type: Schema.ObjectId, ref: 'user'},
//   todoText: {type: String},
//   createdAt  : {type : Date, default : Date.now}
  
//   })
  
  
//   const Todo = mongoose.model('Todo', TodoSchema);

 