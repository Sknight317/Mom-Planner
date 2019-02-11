const express = require("express");
const router = express.Router();
const EventController = require("../../controllers/EventController");


// Matches with "/api/todo"
router.route("/")
// passport.authenticate("jwt", { session: false })

  .get(EventController.findAll)
  .post(EventController.create);

// Matches with "/api/todo/:id"
router
  .route("/:id")
  // passport.authenticate("jwt", { session: false })
  .get(EventController.findById)
  .put(EventController.update)
  .delete(EventController.remove);

module.exports = router;

