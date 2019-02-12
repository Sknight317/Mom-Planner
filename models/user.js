const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
 const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);


module.exports = User;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const userSchema = new Schema({
// name: {type: String, required: true},
// email: {type: String, required: true},
// password: {type: String, required: true},
// date: {type: Date, default: Date.now},
// // todos: [Todo]
// });

// const TodoSchema = new Schema({
//   name: {type: String},
//   userId: {type: Schema.ObjectId, ref: 'userId',default:null},
//   todoText: {type: String},
//   createdAt  : {type : Date, default : Date.now}
  
//   })
  
  
// const Todo = mongoose.model('Todo', TodoSchema);
// const user = mongoose.model('user', userSchema);

// module.exports = user, Todo;