const express = require("express");
const router = express.Router();
const ToDoController = require("../../controllers/ToDocontroller");
const passport = require("passport");
const User = require("../../models/user");
const Todo = require("../../models/Todo")
require('../../config/passport')(passport)
// // Matches with "/api/todo"
// router.route("/")

//   .get(ToDoController.findAll)
//   .post(ToDoController.create);

// // Matches with "/api/todo/:id"
router
  .route("/:id")
  .get(ToDoController.findById)
//   .put(ToDoController.update)
  .delete(ToDoController.remove);

// module.exports = router;

// Get all todos for a specific user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let token = getToken(req.headers);
    console.log(token)
    if (token) {
    Todo.find({ Userid: req.user._id })
      .then(todos => {console.log(todos)
        res.json(todos)})
      .catch(err => console.log(err));
  }
  });

//Save Todo for a specific user
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let token = getToken(req.headers);
    // console.log(token)
  if (token) {
    const Userid = req.user_id
    Todo.create({Userid: req.user._id, name: req.body.name, todoText: req.body.todoText}, (err, post) => {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken =  (headers) => {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

  module.exports = router;