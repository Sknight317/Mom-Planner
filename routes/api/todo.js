const express = require("express");
const router = express.Router();
const ToDoController = require("../../controllers/ToDocontroller");


// Matches with "/api/todo"
router.route("/")
// passport.authenticate("jwt", { session: false })

  .get(ToDoController.findAll)
  .post(ToDoController.create);

// Matches with "/api/todo/:id"
router
  .route("/:id")
  .get(ToDoController.findById)
  .put(ToDoController.update)
  .delete(ToDoController.remove);

module.exports = router;

