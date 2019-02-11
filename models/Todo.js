const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
 const TodoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, //How we connect todos with specific user
    ref: "users"
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

// Export the Article model
module.exports = Todo;
