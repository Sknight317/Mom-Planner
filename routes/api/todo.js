const express = require("express");
const router = express.Router();
const ToDoController = require("../../controllers/ToDocontroller");
const passport = require("passport");
const User = require("../../models/user");
const Todo = require("../../models/Todo")

// // Matches with "/api/todo"
// router.route("/")

//   .get(ToDoController.findAll)
//   .post(ToDoController.create);

// // Matches with "/api/todo/:id"
// router
//   .route("/:id")
//   .get(ToDoController.findById)
//   .put(ToDoController.update)
//   .delete(ToDoController.remove);

// module.exports = router;

//Get all todos for a specific user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Todo.find({ userId: req.user.id })
      .then(todos => res.json(todos))
      .catch(err => console.log(err));
  }
);

//Save Todo
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Todo.create(req.body, function (err, post) {
      if (err) return next(err);
      const newTodo = new Todo({
        userId: userId,
      });
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});


module.exports = router;