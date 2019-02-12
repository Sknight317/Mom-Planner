const express = require("express");
const router = express.Router();
const ToDoController = require("../../controllers/ToDocontroller");
const passport = require("passport");
const User = require("../../models/user");
const Todo = require("../../models/Todo")
require('../../config/passport')(passport)
// Matches with "/api/todo"
router.route("/")

  .get(ToDoController.findAll)
  .post(ToDoController.create);

// Matches with "/api/todo/:id"
router
  .route("/:id")
  .get(ToDoController.findById)
  .put(ToDoController.update)
  .delete(ToDoController.remove);

module.exports = router;

// // Get all todos for a specific user
// // router.get(
// //   "/todo",
// //   passport.authenticate("jwt", { session: false }),
// //   (req, res) => {
// //     var token = getToken(req.headers);
// //     if (token) {
// //     Todo.find({ userId: req.user.id })
// //       .then(todos => res.json(todos))
// //       .catch(err => console.log(err));
// //   }
// // );
// // //Save Todo
// // router.post(
// //   "/todo",
// //   passport.authenticate("jwt", { session: false }),
// //   (req, res) => {
// //     var token = getToken(req.headers);
// //   if (token) {
// //     Book.create(req.body, function (err, post) {
// //       if (err) return next(err);
// //       res.json(post);
// //     });
// //   } else {
// //     return res.status(403).send({success: false, msg: 'Unauthorized.'});
// //   }
// // });


// // module.exports = router;
isLoggedIn= (req, res, next) => {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
// router.post('/', isLoggedIn, (req, res) => {
//   // const Userid = req.user._id;
//   // var token = getToken(req.headers);
//   // if (token) {
//   const newTodo = new Todo({
//     // name : req.body["todotext"],
//     Userid: Userid
//   });
//    newTodo.save( (err) => {
//     if (err) return next(err);
//     res.json(post);
//   });
// // } else {
//   return res.status(403).send({success: false, msg: 'Unauthorized.'});
// // }
// });

// getToken =  (headers) => {
//   if (headers && headers.authorization) {
//     let parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

  module.exports = router;